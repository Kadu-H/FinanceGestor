const bodyParser = require("body-parser");
const express = require("express");

const connectDB = require('./db/connectMongoDB.js');
const costsRoute = require("./routes/RouteCosts.js");
const goalsRoute = require("./routes/RouteGoals.js");
const aportsRoute = require("./routes/RouteAports.js");

require('dotenv').config();

const app = express();

const port = 3000;

function RenderView(){
    app.use(bodyParser.urlencoded({ extended:false }));

    app.set("view engine", "ejs");
    app.set("views", __dirname+"/src/view/");
}

RenderView();

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log("Aplicação rodando porta "+port));
    } catch (error) {
        console.log("Erro: ",error);
    }
}

app.use(express.json());
app.use('/costs', costsRoute);
app.use('/goals', goalsRoute);
app.use('/aports', aportsRoute);

start();