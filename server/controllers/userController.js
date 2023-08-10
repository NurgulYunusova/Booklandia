const moment = require("moment");
const nodemailer = require("nodemailer");
const { generateToken } = require("../utils/generateToken");
const { User } = require("../models/User");

const userController = {
  registerUser: async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ msg: "User already exists" });
    }

    const confirmCode = Math.floor(Math.random() * 10000);
    const codeExpire = moment().add(89, "seconds");

    const user = new User({
      name,
      email,
      password,
      confirmCode,
      codeExpire,
    });

    await user.save();

    sendConfirmEmail(email, confirmCode);

    res.json({
      message:
        "Registration successful. Please check your email for confirmation.",
    });
  },
  confirmUser: (req, res) => {
    let confirmCode = req.body.confirmCode;
    let email = req.body.email;

    User.findOne({ email: email }).then((user) => {
      if (user.codeCounter == 0) {
        res.status(500).json({ message: "BLOCK!!!" });
      } else {
        if (user.confirmCode == confirmCode) {
          if (user.codeExpire > moment()) {
            generateToken(res, user._id);

            user.isActive = true;
            user.codeCounter = 3;

            user.save();
            res.status(201).json({
              _id: user._id,
              name: user.name,
              email: user.email,
              isAdmin: user.isAdmin,
            });
          } else {
            res.status(500).json({ message: "Expire Date Error!" });
          }
        } else {
          user.codeCounter = user.codeCounter - 1;

          user.save();
          res.status(404).json({
            "Confirm Code Error:!":
              "You have " + user.codeCounter + " rights left",
          });
        }
      }
    });
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  },
  logoutUser: (req, res) => {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: "Logged out successfully" });
  },
  getUserProfile: async (req, res) => {
    const user = await User.findById(req.user._id).populate(
      "wishlist basket orders"
    );
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  },
  updateUserProfile: async (req, res) => {
    let file = req.files.photo;

    const user = await User.findById(req.user._id);

    if (user) {
      const uploadFile = () => {
        return new Promise((resolve, reject) => {
          const path = "userProfileImages/" + file.name;
          file.mv(path, function (err) {
            if (err) {
              reject(err);
            } else {
              resolve(path);
            }
          });
        });
      };

      const imagePath = await uploadFile();

      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.profileImage = imagePath || user.profileImage;

      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  },
  // Admin
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch users", error });
    }
  },
  deleteUser: async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
      if (user.isAdmin) {
        res.status(400);
        throw new Error("You can'not delete admin user");
      }
      await User.deleteOne({ _id: user._id });
      res.json({ message: "User removed" });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  },
  getUserById: async (req, res) => {
    const user = await User.findById(req.params.id).select("-password");

    if (user) {
      res.json(user);
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  },
  updateUser: async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.isAdmin = Boolean(req.body.isAdmin);

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  },
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "login",
    user: "c8657545@gmail.com",
    pass: "bcozssymjajpqicg",
  },
});

function sendConfirmEmail(to, code) {
  transporter.sendMail({
    from: "c8657545@gmail.com", // Sender address
    to: to, // List of receivers
    subject: "Booklandia - Email Confirmation", // Subject line
    text: "Your confirmation code is: " + code, // Plain text body
  });
}

module.exports = {
  userController,
};
