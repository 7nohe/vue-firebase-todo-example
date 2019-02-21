import myFunctions from "../../functions/index";
import sinon from 'sinon';

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

describe("createUsername", () => {
  test("shoud create username from email", () => {
    const setStub = sinon.stub();
    const snap = {
      data: () => ({
        email: '7nohe@example.com'
      }),
      ref: {
        set: setStub
      }
    }
    setStub.withArgs({ username: '7nohe' }, { merge: true }).returns(true);
    const wrapped = fft.wrap(myFunctions.createUsername);
    expect(wrapped(snap, { params: { userId: "user-id-12345" } })).toBe(true);
  });
});
