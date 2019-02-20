import myFunctions from "../../functions/index";

const fft = require("firebase-functions-test")();

describe("helloworld", () => {
  test("should get 200 response", () => {
    const req = { query: { text: "input" } };
    const res = {
      send: result => {
        expect(result).toBe("Hello from Firebase!");
      }
    };

    myFunctions.helloWorld(req, res);
  });
});

// describe("createUsername", () => {
//   test("shoud create username from email", () => {
//     const snap = fft.firestore.makeDocumentSnapshot(
//       { email: "7nohe@example.com" },
//       "user/test-user-id"
//     );
//     const wrapped = fft.wrap(myFunctions.createUsername);
//     wrapped(snap, { params: { userId: "user-id-12345" } });
//   });
// });
