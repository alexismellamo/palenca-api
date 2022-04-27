const users = require("../users.json");

function getUser({ email, password }) {
  const user = users.find((u) => u.email === email);
  if (!user || user.password !== password) {
    throw new Error("CREDENTIALS_INVALID");
  }
  return user;
}

function getUserByAccessToken({ accessToken }) {
  const user = users.find((u) => u.token === accessToken);
  if (!user) {
    throw new Error("CREDENTIALS_INVALID");
  }
  return user;
}

module.exports = {
  getUser,
  getUserByAccessToken,
};
