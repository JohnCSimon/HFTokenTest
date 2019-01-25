import bodyParser from "body-parser";
import { validate as emailValidator } from "email-validator";
import express from "express";

import { buildEmailToken, retrieveHash } from "./tokenizedEmail";
// var bodyParser = require('body-parser');

// const app = express();
// const port = 8086; // default port to listen

// app.listen(port, () => {
//     // tslint:disable-next-line:no-console
//     console.log(`server started at http://localhost:${port}`);
// });

// // define a route handler for the default home page
// app.get("/", (req, res) => {
//     res.send("Hello world!");
// });

// // start the Express server
// app.listen(port, () => {
//     console.log(`server started at http://localhost:${port}`);
// });


const app = express();
const port = 28080; // default port to listen

app.use(bodyParser.json()); // support json encoded bodies

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.post("/email", (req, res) => {
    console.log(req.body);
    const { email } = req.body
    const valid = emailValidator(email);
    const hashed = buildEmailToken(req.body);
    res.send(hashed);
});

app.post("/email", (req, res) => {
    console.log(req.body);
    res.send("Hello world!");

});


// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});