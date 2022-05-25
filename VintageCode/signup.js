import { createHash, privateDecrypt } from "crypto";
const mysql = require("mysql");
import { mysqlCreds } from "../nogitub/credentials";
import { readFileSync } from "fs";
const privateKey = readFileSync("privatekey.pem", "utf8");

//create a function to decrypt asynchronous password
const decryptPassword = (password) => {
	const decrypted = privateDecrypt(privateKey, password);
	return decrypted;
};
//encrypt password
const encryptPassword = (password) => {
	return (encrypted = createHash("sha256").update(password).digest("hex"));
};

export default function signup(req, res) {
	console.log("got signup");
	const { username, password, email } = req.query;
	//decrypt password
	const decrypted = decryptPassword(password);
	console.log(decrypted);
	const encrypted = encryptPassword(decrypted);
	console.log(encrypted);
	res.json({ newpassword: encrypted });
}
