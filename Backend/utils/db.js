import mysql from "mysql";

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee",
});

conn.connect(function (err) {
  if (err) {
    console.log("Error connecting to MySQL");
  } else {
    console.log("Connected!");
  }
});

export default conn;
