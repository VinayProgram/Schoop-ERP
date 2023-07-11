var jwt = require("jsonwebtoken");
const secrettoken = "Saraswatividya@1010";

const logincheck = (req, res, next) => {
  let token = req.header("SVML");
  if (token) {
    let author = jwt.verify(token, secrettoken);
    req.token = author;
    next();
  } else {
    res.send("error");
  }
};

module.exports=logincheck