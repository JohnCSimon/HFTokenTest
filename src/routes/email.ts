import { buildEmailToken, retrieveHash } from "../tokenizedEmail";
import { Response, Request } from "express";


/*
 POST /email
 body: { "email": "example@email.com" }
*/
export const encodeEmail = (req: Request, res: Response) => {
    if (!req.body) { // ordinarily we'd have a model validator here
        res.status(400).send("bad input - needs an email");
    }
    const { email } = req.body;
    try {
        const hashed = buildEmailToken(email);
        res.status(200).send(hashed);
    } catch (e) {
        res.status(400).send(e.message);
    }
}

/*
GET /email/EMAILHASH
*/
export const decodeEmail = (req: Request, res: Response) => {
    if (!req.params || !req.params.emailHash) {
        res.status(400).send("Requires an email hash");
        return;
    }
    const email = retrieveHash(req.params.emailHash);
    if (email) {
        res.status(200).send(email);
    } else {
        res.status(404).send("email not found");
    }
};
