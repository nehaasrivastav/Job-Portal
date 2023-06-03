import userModel from "../models/userModel.js";
// import next from "../Middleware/errorMiddleware.js";
import bcrypt from "bcryptjs"

export const registerController = async (req, res,next) => {
  try {
    const { name, email, password } = req.body;

    // validate
    if (!name) {
      next("name is required");
    }
    if (!email) {
      next("please provide email");
    }
    if (!password) {
      next("please provide password");
    }

    // check stored data
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "email already exist",
      });
    }

    //store the data
    const newUser = {
      name: name,
      email: email,
      password:password
      // password:bcrypt.hashSync(password,"abc")
    };

    const user = await userModel.create(newUser);
    res.status(200).send({
      success: true,
      message: "successfully registered",
      user,
    });
  } catch (err) {
    next("error in register controller");
  }
};


export const loginController = async(req , res,next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      // return res.status(400).send({
      //   success: false,
      //   message: "all fields are required",
      // });
      next("all fields are required")
    }

    const user = await userModel.findOne({ email })
    if (!user) {
      // res.status(400).send({
      //   success: false,
      //   message: "invalid email",
      // });
      next("invalid email")
    }

    // const isPassword = bcrypt.compareSync(password,user.password)
    const isPassword = await userModel.findOne({password},user.password)
    if(!isPassword){
      res.status(400).send({
        success: false,
       message: "wrong password"
      })
      // next("incorrect password")
    }

    res.status(200).send({
      success:true,
      message:"login successfully",
      user
    })
  } catch (err) {}
};
