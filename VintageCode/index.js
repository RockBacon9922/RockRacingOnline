import axios from "axios";
import crypto from "crypto";

// create function to encrypt password
const encryptPassword = async (password) => {
	// fetch public key from api
	console.log("hi");
	const publickey = await axios.get("/api/key");
	// encrypt password
	return crypto.publicEncrypt(publickey.publickey, password).toString("base64");
};
// create a function to check if a password is strong
const checkPassword = (password) => {
	const strongRegex = new RegExp(
		"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
	);
	return strongRegex.test(password);
};

function Form() {
	const registerUser = async (event) => {
		event.preventDefault();
		var data = {
			name: event.target.name.value,
			email: event.target.email.value,
			password: event.target.password.value,
		};
		// check if password is strong
		if (!checkPassword(data.password)) {
			alert("Password is not strong");
			return;
			// check if email is valid
		} else if (!data.email.includes("@")) {
			alert("Email is not valid");
			return;
			//check if username is valid
		} else if (data.name.length < 3) {
			alert("Username is not valid");
			return;
		} else {
			// encrypt password
			console.log("hi");
			data.password = await encryptPassword(data.password);
			console.log(data.password);
			axios
				.post("/api/signup", data)
				.then((res) => {
					console.log(res);
					console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
					if (err.response.status === 412) {
						alert("Username already exists");
					}
				});
		}
	};

	return (
		<form onSubmit={registerUser}>
			<label htmlFor="name">Name</label>
			<input id="name" type="text" autoComplete="name" required />
			<label htmlFor="email">Email</label>
			<input id="email" type="email" autoComplete="email" required />
			<label htmlFor="password">Password</label>
			<input
				id="password"
				type="password"
				autoComplete="new-password"
				required
			/>
			<button type="submit">Register</button>
		</form>
	);
}

export default Form;
