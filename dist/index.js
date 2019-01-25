"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const email_validator_1 = require("email-validator");
const tokenizedEmail_1 = require("./tokenizedEmail");
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
const app = express_1.default();
const port = 28080; // default port to listen
app.use(body_parser_1.default.json()); // support json encoded bodies
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.post("/email", (req, res) => {
    console.log(req.body);
    const { email } = req.body;
    const valid = email_validator_1.validate(email);
    const hashed = tokenizedEmail_1.buildEmailToken(req.body);
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
//# sourceMappingURL=index.js.map