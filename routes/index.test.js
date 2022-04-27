const { index } = require("./index");

test("GET / returns 'Hello Palenca'", () => {
  const req = {};

  const res = {
    text: "",
    send(input) {
      this.text = input;
    },
  };
  index(req, res);

  expect(res.text).toEqual("Hello Palenca");
});
