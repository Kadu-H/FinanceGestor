import bodyParser from "body-parser";
import express from "express";

import path from "path";
import { fileURLToPath } from 'url';

const app = express();

const port = 3000;

function RenderView(){
    app.use(bodyParser.urlencoded({ extended:false }));

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    app.set("view engine", "ejs");
    app.set("views", __dirname+"/src/view/");
}

RenderView();

app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log("Aplicação rodando porta "+port);
})