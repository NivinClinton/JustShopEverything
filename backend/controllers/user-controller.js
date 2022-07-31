import user from '../model/user.js'
import bcrypt from 'bcryptjs'

export const getAllUser = async (req, res, next) => {
    let users;
    try {
      users = await user.find();
    } catch (err) {
      console.log(err);
    }
    if (!users) {
      return res.status(404).json({ message: "no users found" });
    }
    return res.status(200).json({ users });
  };
  export const signup = async (req, res, next) => {
    const { userName, email, password, mobileNumber } = req.body;
    let existingUser;
    try {
      existingUser = await user.findOne({ email });
    } catch (err) {
      return console.log(err);
    }
    if (existingUser) {
      return res.status(400).json({ message: "user already found"});
    }
    const hashedPassword = bcrypt.hashSync(password);
    const User = new user({
      userName,
      email,
      password:hashedPassword ,
      mobileNumber
    });
  
    try {
      await User.save();
    } catch (err) {
      return console.log(err);
    }
    return res.status(201).json({ message: "Registration Successful" });
  };
  export const login = async (req, res, next) => {
    const { email, password } = req.body;
    let existingUser;
    try {
      existingUser = await user.findOne({ email });
    } catch (err) {
      return console.log(err);
    }
    if (!existingUser) {
      return res.status(404).json({ message: "user not found" });
    }
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(404).json({ message: "password incorrect" });
    }
    return res.status(200).json({ message: "login successful",user:existingUser });
  };
  
  
 
  