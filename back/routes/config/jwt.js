const { expressjwt } = require("express-jwt");
const config = require("../../nodemon.json");

function jwt() {
  const { secret } = config;
  return expressjwt({ secret, algorithms: ["sha1", "RS256", "HS256"] }).unless({
    path: [
      // public routes that don't require authentication
      "/admin/checklogin",
      "/admin/EmpCheckLogin",
    ],
  });
}

module.exports = jwt;
