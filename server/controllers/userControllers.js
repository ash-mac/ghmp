const expressAsyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const res = require("express/lib/response");
const generateToken = require("../config/generateToken");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.MAIL_KEY);
const { errorHandler } = require("../helpers/dbErrorHandling");

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }
  const domain = email.substring(email.length - 12);
  if (domain !== "iitrpr.ac.in") {
    res.status(400);
    throw new Error("Only people belonging to IIT Ropar can register");
  } else {
  }
  //@iitrpr.ac.in
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User alredy Exist");
  }

  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    // res.status(201).json({
    //   _id: user._id,
    //   name: user.name,
    //   email: user.email,
    //   pic: user.pic,
    //   token: generateToken(user._id),
    // });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
  const token = generateToken(user._id);
  const emailData = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Account activation link",
    html: `
              <h1>Please use the following to activate your account</h1>
              <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
              <hr />
              <p>This email may containe sensetive information</p>
              <p>${process.env.CLIENT_URL}</p>
          `,
  };
  console.log(process.env.EMAIL_FROM);
  console.log(emailData);
  sgMail
    .send(emailData)
    .then((sent) => {
      return res.json({
        message: `Email has been sent to ${email}`,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        errors: errorHandler(err),
      });
    });
});
const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});
// /api/user?search=apple

module.exports = { registerUser, authUser };
