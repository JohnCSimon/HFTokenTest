// import { expect } from "chai";
import chai, { expect } from "chai";
// import { Request, Response } from "express";
import sinonChai from "sinon-chai";
import { mockReq, mockRes } from "sinon-express-mock";
import { decodeEmail, encodeEmail } from "../routes/email";

chai.use(sinonChai);

describe("Email routes", () => {
    describe("encodeEmail", () => {
        it("should return 400 - Invalid email when given no email", () => {
            const request = {
                body: {
                    email: "bar"
                },
            };
            const req = mockReq(request);
            const res = mockRes();

            encodeEmail(req, res);
            expect(res.status).to.be.calledWith(400);
            expect(res.send).to.be.calledWith("Invalid email");
        });

        it("should return 200 - and a hash when given a valid email", () => {
            const request = {
                body: {
                    email: "a@b.com"
                },
            };
            const req = mockReq(request);
            const res = mockRes();

            encodeEmail(req, res);
            expect(res.status).to.be.calledWith(200);
            expect(res.send).to.be.calledWith("357a20e8c56e69d6f9734d23ef9517e8");
        });

    });

    describe("decodeEmail", () => {
        it("should return 404 - email not found", () => {
            const request = {
                params: {
                    emailHash: "NOTFOUND"
                },
            };
            const req = mockReq(request);
            const res = mockRes();

            decodeEmail(req, res);

            expect(res.status).to.be.calledWith(404);
            expect(res.send).to.be.calledWith("email not found");
        });

        it("should return 200 - and an email when given a valid hash", () => {
            const request = {
                params: {
                    emailHash: "357a20e8c56e69d6f9734d23ef9517e8"
                },
            };
            const req = mockReq(request);
            const res = mockRes();

            decodeEmail(req, res);
            expect(res.status).to.be.calledWith(200);
            expect(res.send).to.be.calledWith("a@b.com");
        });

    });

});
