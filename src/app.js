import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    console.log("hola");

    res.render("index")
})

app.listen(8080, () => console.log("Servidor en 8080!"))