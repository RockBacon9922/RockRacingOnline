const { generateKeyPairSync } = require("crypto");

var { publicKey, privateKey } = generateKeyPairSync("rsa", {
	modulusLength: 4096,
	publicKeyEncoding: {
		type: "spki",
		format: "pem",
	},
	privateKeyEncoding: {
		type: "pkcs8",
		format: "pem",
	},
});

console.log(publicKey);
console.log(privateKey);
// create a textfile named keypair.js
function savekey() {
	const fs = require("fs");
	fs.writeFileSync("publickey.pem", `${publicKey}`, "utf8");
	fs.writeFileSync("privatekey.pem", `${privateKey}`, "utf8");
}
savekey();

export default function Publickey(req, res) {
	res.status(200).json({
		key: publicKey,
	});
}
