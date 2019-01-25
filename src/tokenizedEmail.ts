import md5hasher from "md5";

type Email = string;

let map = new Map<string, string>();

export const buildEmailToken = (email: Email) => {
    const hashedEmail = md5hasher(email);

    map.set(email, hashedEmail);

    return hashedEmail;
};

export const retrieveHash = (email: string) => {
    return "yay";
};

