const { login } = require("./uber");

describe("POST /uber/login", () => {
  test("right credentials", () => {
    const req = {
      body: {
        email: "pierre@palenca.com",
        password: "MyPwdChingon123",
      },
    };

    const res = {
      response: {},
      json(input) {
        this.response = input;
      },
    };
    login(req, res);

    expect(res.response).toEqual({
      message: "SUCCESS",
      access_token: "cTV0aWFuQ2NqaURGRE82UmZXNVBpdTRxakx3V1F5",
    });
  });

  test("bad credentials", () => {
    const req = {
      body: {
        email: "alexis@palenca.com",
        password: "MyPwdChingon123",
      },
    };

    const res = {
      response: {},
      json(input) {
        this.response = input;
      },
    };

    const next = (err) => {
      res.response = err;
    };
    login(req, res, next);

    const response = res.response;
    expect(response.status).toBe(401);
    expect(response.message).toEqual("CREDENTIALS_INVALID");
    expect(response.details).toEqual("Incorrect username or password");
  });
});
