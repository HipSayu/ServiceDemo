import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from './routes/web';
import bodyParser from "body-parser";
// import connection from './config/connectDB'
require("dotenv").config();

const app = express();

//configEngine
configViewEngine(app);

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//test connect
// connection();

// init web route
initWebRoutes(app)

const PORT = process.env.PORT || 1611



app.listen(PORT, () => {
    console.log("http://localhost:" +PORT)
})