import { connectionstr } from "@/lib/db";
import User from "@/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export async function POST(request){
    
    const {email,password} = await request.json();
    const hashedpassword = await bcrypt.hash(password,10);
    
    console.log(email);
    console.log(password);
    await mongoose.connect(connectionstr)
    await User.create({email,password:hashedpassword})
    return NextResponse.json({result: "New User Created",success:true},{status:200})
}