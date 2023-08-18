const bodyParser = require("body-parser");
const express = require("express");

const costs = require("./routes/costs.js");

const app = express();

const port = 3000;

function RenderView(){
    app.use(bodyParser.urlencoded({ extended:false }));

    app.set("view engine", "ejs");
    app.set("views", __dirname+"/src/view/");
}

RenderView();

app.use('/', costs);

app.listen(port, () => {
    console.log("Aplicação rodando porta "+port);
})