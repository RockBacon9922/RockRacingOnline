export default function handler(req, res) {
	if (!req.query.length) {
		req.query.length = 20;
	}
	const crypto = require("crypto");
	var randomnumber = crypto
		.randomBytes(parseInt(req.query.length))
		.toString("hex");
	res.status(200).json({ randomnumber });
}
