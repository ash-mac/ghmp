const expressAsyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const res = require("express/lib/response");


const bookRoom = expressAsyncHandler(async (req, res) =>
{
    const { name, email, phoneNo }=req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all the fields");
      }
})