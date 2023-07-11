var jwt = require("jsonwebtoken");
const secrettoken = "Saraswati-childs@$%^&^&2707";

const studentcheck = (req, res, next) => {
  let token = req.header("STML");
  if (token) {
    let author = jwt.verify(token, secrettoken);
    req.token = author;
    next();
  } else {
    res.send("error");
  }
};

module.exports=studentcheck