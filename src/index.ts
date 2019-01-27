import bodyParser from "body-parser";
import express from "express";

import { buildEmailToken } from "./tokenizedEmail";
import { encodeEmail, decodeEmail } from "./routes/email";

const app = express();
const port = 28080;

app.use(bodyParser.json());

app.post("/email", encodeEmail);
app.get("/email", decodeEmail);

app.get("/email", (req, res) => {});

// app.post("/email", (req, res) => {
//     console.log(req.body);
//     res.send("Hello world!");

// });


// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});