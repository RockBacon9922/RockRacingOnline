import axios from "axios";

function Form() {
	const registerUser = (event) => {
		event.preventDefault(); // don't redirect the page
		// where we'll add our form logic
		console.log("hello");
		axios
			.post("http://localhost:3000/api/new", "hello")
			.then(console.log("true"), console.log("false"));
	};

	return (
		<form onSubmit={registerUser}>
			<label htmlFor="name">Name</label>
			<input id="name" type="text" autoComplete="name" required />
			<button type="submit">Register</button>
		</form>
	);
}

export default Form;
