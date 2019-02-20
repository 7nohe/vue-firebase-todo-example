import myFunction from '../../functions/index'

describe("helloworld", () => {
  test("should get 200 response", () => {
    const req = { query: {text: 'input'} };
    const res = {
      send: (result) => {
        expect(result).toBe('Hello from Firebase!');
      }
    };
    
    myFunction.helloWorld(req, res)
  });
});
