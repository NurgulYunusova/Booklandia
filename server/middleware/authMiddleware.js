const jwt = require("jsonwebtoken");
const { User } = require("../models/User");

// User must be authenticated
const protect = async (req, res, next) => {
  console.log(req.headers);
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json({ message: "Invalid token" });
    }

    req.userId = decoded.userId;

    next();
  });
};

module.exports = {
  protect,
};

// User must be an admin
// const admin = (req, res, next) => {
//   if (req.user && req.user.isAdmin) {
//     next();
//   } else {
//     res.status(401);
//     throw new Error("Not authorized as an admin");
//   }
// };

// token = req.headers.authorization;

// if (token) {
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     req.user = await User.findById(decoded.userId).select("-password");

//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(401);
//     throw new Error("Not authorized, token failed");
//   }
// } else {
//   res.status(401);
//   throw new Error("Not authorized, no token");
// }
