import { NextResponse } from "next/server";
import bycrypt from "bcryptjs";
import User from "@/models/User";
import connectDB from "@/utilis/db";

export const POST = async (req, res, next) => {
  //get all the data required from the server
  const { email, password } = await req.json();
  //connect to database
  // check if user exists check password
  connectDB();
  try {
    const isUser = await User.findOne({ email: email });
    if (isUser) {
      console.log(email,password);
      const foundPassword = isUser.password;
      console.log(foundPassword);
      console.log(JSON.stringify(isUser));
      const matchPassword = bycrypt.compareSync(password, foundPassword);
      console.log(matchPassword);
      if (matchPassword) {
        return new NextResponse(
          JSON.stringify({ userData: isUser, message: "successfully logged" }),
          {
            status: 200,
          }
        );
      } else {
        return NextResponse(
          JSON.stringify({ message: "invalid credentials" }),
          {
            status: 400,
          }
        );
      }
    } else {
      return NextResponse(JSON.stringify({ message: "user does not exist" }), {
        status: 400,
      });
    }
  } catch (error) {
    return NextResponse(JSON.stringify(error), {
      status: 500,
    });
  }
};