const createError = require("http-errors");
const { check, validationResult } = require("express-validator");
const express = require("express");
const { getUser, getUserByAccessToken } = require("../services/user");
const router = express.Router();

function login(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const user = getUser({ email, password });

    if (user) {
      res.json({
        message: "SUCCESS",
        access_token: user.token,
      });
    }
  } catch (e) {
    if (e.message === "CREDENTIALS_INVALID") {
      next(
        createError(401, {
          message: e.message,
          details: "Incorrect username or password",
        })
      );
      return;
    }

    next(createError(500));
  }
}
router.post(
  "/login",
  check("email").isEmail().withMessage("Invalid email"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long"),
  login
);

router.get("/profile/:access_token", (req, res, next) => {
  const { access_token } = req.params;
  try {
    const user = getUserByAccessToken({ accessToken: access_token });
    return res.json({
      message: "SUCCESS",
      platform: user.userInfo.platform,
      profile: user.userInfo.profile,
    });
  } catch (e) {
    console.log(e);
    if (e.message === "CREDENTIALS_INVALID") {
      next(
        createError(401, {
          message: e.message,
          details: "Incorrect token",
        })
      );
      return;
    }
    next(createError(500));
  }
});

const uberModule = (module.exports = router);
uberModule.login = login;
