const express = require("express");
const app = express();
const path = require("path");

//settings
app.set("port", 8080);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));//esto le indica a node donde esta el directorio views para poder renderisar en app.get.
app.engine("html", require("ejs").renderFile);//con esto puedo usar archivos html con el motor de plantillas ejs sin tener que usar dicha extension.
//middlewares

//routes
app.use(require("./routes/index"));
//static files
app.use(express.static(path.join(__dirname, "public")));
//listening the server
app.listen(app.get("port"), ()=> {
    console.log("server on port", app.get("port"));
})