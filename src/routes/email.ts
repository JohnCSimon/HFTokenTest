import { buildEmailToken, retrieveHash } from "../tokenizedEmail";
import {Request, Response} from "express";


/*
 POST /email
 body: { "email": "example@email.com" }
*/
export const encodeEmail = (req: Request, res: Response) => {
    const {email} = req.body; // ordinarily we'd have a model validator here 
    try{
        const hashed = buildEmailToken(email);
        res.send(hashed);
    } catch (e) {
        res.status(400).send(e.message);
    }
}

/*
GET /email/EMAILHASH
*/
export const decodeEmail = (req: Request, res: Response) => {
    // try{
    //     res.send(hashed);
    // } catch (e) {
    //     res.status(400).send(e.message);
    // }

}