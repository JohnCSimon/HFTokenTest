import { validate as emailValidator } from "email-validator";
import md5hasher from "md5";

const map = new Map<string, string>();

export const buildEmailToken = (email: string) => {
    if (emailValidator(email) === false) {
        throw new Error ("Invalid email");
    }

    const hashedEmail = md5hasher(email);
    map.set(email, hashedEmail);
    return hashedEmail;
};

export const retrieveHash = (email: string) => {
    return "yay";
};
