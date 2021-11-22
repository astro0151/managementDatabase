let express = require("express");
let app = express();
let mysql = require("mysql");
let cors = require("cors");
app.use(cors());
app.use(express.json());
let db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "myDataBase",
});

app.post("/addemp", (req, res) => {
  let name = req.body.name;
  let department = req.body.department;
  let age = req.body.age;
  let place = req.body.place;

  let contact = req.body.contact;
  console.log(contact);
  db.query(
    "INSERT INTO employee (name,dept,age,place,contact) VALUES (?,?,?,?,?)",
    [name, department, age, place, contact],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send("data added successfully to database");
      }
    }
  );
});

app.listen(9000, () => {
  console.log("server is listening now");
});
