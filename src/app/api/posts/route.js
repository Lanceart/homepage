import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);

  
  const username = url.searchParams.get("username");

  try {
    await connect();

    const posts = await Post.find();
    Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};


export const PUT = async(request)=>{
  const { id } = await request.params;
  console.log("jasd" + id);
  const updatedData = await request.body.json;
  console.log("jasd" + updatedData);
  try {
    await connect();
    
    await Post.findByIdAndUpdate(id,updatedData,{
      new: true,  // This option returns the modified document
      runValidators: true  // This option applies model's validation on update
    });
    if (!updatedPost) {
      return new NextResponse("Post not found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(updatedPost), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
