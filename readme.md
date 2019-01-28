# Email Token based rest service in typescript with unit tests

I'm saving the email token by encoding it as md5 and putting it into a static hash. 

1. Install node 10, windows or unix.
2. run `npm install` and it'll install all the packages into `node_modules`
3. Run `npm run build` and it'll compile the typescript into the dist directory
4. Open `.env` and change the value of `SERVERPORT` to your port of choice. Port 80 requires admin access. If you leave off the port it'll default to **8080**.
5. Run with `npm run start`


to create an email POST like this:
```
POST /email HTTP/1.1
Host: localhost:8080
Content-Type: application/json
{"email":"a@b.com"}
```

to read an email 

make a GET like this to /email/hash
```
GET /email/357a20e8c56e69d6f9734d23ef9517e8 HTTP/1.1
Host: localhost:8080
```

To unit test run 
`npm run test`

And it'll run the four mocha based tests and should produce an output like 

```
npm run test

> HFEmailTokenMicroservice@1.0.0 test /home/john/git/HFTokenTest
> npm run build && mocha ./dist/**/*.spec.js


> HFEmailTokenMicroservice@1.0.0 build /home/john/git/HFTokenTest
> tsc

  Email routes
    encodeEmail
      ✓ should return 400 and Invalid email message when given no email
      ✓ should return 200 and a hash when given a valid email
    decodeEmail
      ✓ should return 404 and email not found message when given an invalid email address
      ✓ should return 200 - and an email when given a valid hash


  4 passing (24ms)

```