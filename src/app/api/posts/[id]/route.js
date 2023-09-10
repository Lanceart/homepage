import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
import { headers } from "next/headers";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

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
  const { id } = params;
  const chunks = [];
  for await (const chunk of req.body) {
    chunks.push(chunk);
  }
  const buffer = Buffer.concat(chunks);
  const body = JSON.parse(buffer.toString());

  console.log("Received data:", body);


  // console.log("Received data:", body);
  // const updatedData = await body.json();
  // console.log(request.headers);
  // console.log("what",updatedData)
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


// export default async function handler(req, res) {
//   if (req.method === "PUT") {
//     const { id } = req.query;
//     const updatedData = req.body; // body data is automatically parsed by Next.js

//     console.log("Received data:", updatedData);

//     try {
//       // Database update logic here
//       const updatedPost = {}; // Assume you've updated the post and this object contains the updated data

//       res.status(200).json(updatedPost);
//     } catch (err) {
//       console.error("Database error:", err);
//       res.status(500).json({ message: "Internal Server Error" });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
