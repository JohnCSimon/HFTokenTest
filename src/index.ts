import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import { decodeEmail, encodeEmail } from "./routes/email";

dotenv.config();

const app = express();
const port = process.env.SERVERPORT || 8080;

app.use(bodyParser.json());

app.post("/email", encodeEmail);
app.get("/email/:emailHash", decodeEmail);

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});