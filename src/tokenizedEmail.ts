import { validate as emailValidator } from "email-validator";
import md5hasher from "md5";

const map = new Map<string, string>();

export const buildEmailToken = (email: string) => {
    if (emailValidator(email) === false) {
        throw new Error("Invalid email");
    }
    // if this was actual code we'd have something more cryptographically secure than md5, say with a salt
    const hashedEmail = md5hasher(email);
    // if this was actual code it'd be given a proper persistence layer
    map.set(hashedEmail, email);
    return hashedEmail;
};

export const retrieveHash = (emailHash: string) => {
    return map.get(emailHash);
};
