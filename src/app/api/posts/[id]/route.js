import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
import { headers } from "next/headers";

export const GET = async (request, { params }) => {
  const { id } = await params;

  try {
    await connect();

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = await params;

  try {
    await connect();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async(req,{params})=>{
  // console.log("Request Params:", params);
  // console.log(req.body);
  const { id } = await params;
  const chunks = [];
  for await (const chunk of req.body) {
    chunks.push(chunk);
  }
  const buffer = Buffer.concat(chunks);
  const body = JSON.parse(buffer.toString());
  
  try {
    await connect();
    
    const updatePost = await Post.findByIdAndUpdate(id,body);
    if (!updatePost) {
      return new NextResponse("Post not found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(updatePost), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
