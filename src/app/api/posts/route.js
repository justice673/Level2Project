import Post from "@/models/Post";
import connectDB from "@/utilis/db";
import { NextResponse } from "next/server";



export const GET = async () => {
    try{
        //connection in the database
        await connectDB();
        //find all the post in the database
        const posts = await Post.find().sort({ created: -1 });
        //return the post as a json
        return new NextResponse(JSON.stringify(posts),{status:200});
    }
    catch(error){
        //show error
        console.log('error')
        return new NextResponse("Database Error", { status: 500})
    }
};

// create a new post
export const POST = async (req) => {

};