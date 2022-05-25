import fs from "fs";
const publicKey = fs.readFileSync("publickey.pem", "utf8");

export default function key(req, res) {
	console.log("gotkey");
	res.status(200).json({
		key: publicKey,
	});
}
