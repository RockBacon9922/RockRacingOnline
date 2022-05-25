//find arthur a job

//find arthur a driving test

//create a program to count to 10
function count() {
	for (let i = 0; i <= 10; i++) {
		console.log(i);
	}
}

//create a program to connect to a sql server
function connect() {
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

//create a program to connect to a sql server
function connect() {
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

//create
