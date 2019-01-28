import bodyParser from "body-parser";
import express from "express";
import { decodeEmail, encodeEmail } from "./routes/email";
const app = express();
const port = 8080;

app.use(bodyParser.json());

app.post("/email", encodeEmail);
app.get("/email/:emailHash", decodeEmail);

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});