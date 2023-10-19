import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
    const url = new URL(request.url);
  
    
    const username = url.searchParams.get("username");
    const tag = url.searchParams.get("tag");
    try {
      await connect();
      let queryConditions = {};
      queryConditions.tag = tag;
      const posts = await Post.find(queryConditions).sort({ createdAt: -1 });;
      // Post.find(username && { username });
  
      return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };