import { mysqlCreds } from "../../nogitub/credentials";
import mysql from "mysql";

export default function handler(req, res) {
	var query = req.query;
	var con = mysql.createConnection({
		host: "rockbacon2.mysql.database.azure.com",
		user: mysqlCreds.username,
		password: mysqlCreds.password,
	});
	new Promise((resolve, reject) => {
		con.connect(function (err) {
			if (err) reject(err);
			console.log(`Connected!`);
			const QUERYSTR =
				"SELECT password FROM trial.users WHERE username = " +
				'"' +
				query.username +
				'"';
			con.query(QUERYSTR, (err, result) => {
				if (err) reject(err);
				resolve(result);
			});
		});
	}).then(
		(value) => {
			res.status(200).json({ value });
		},
		(error) => {
			res.status(400).json({ error });
		}
	);
	con.end();
}
