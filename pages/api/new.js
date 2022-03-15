var conn = mysql.createConnection({
	host: "rockbacon2.mysql.database.azure.com",
	user: "rockbacon",
	password: "{your_password}",
	database: "{your_database}",
	port: 3306,
	ssl: { ca: fs.readFileSync("{ca-cert filename}") },
});
