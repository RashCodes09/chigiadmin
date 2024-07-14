import dbConfig from "@/app/utlis/dbConfig";
import myheroModel from "@/app/utlis/model/heroModel";
// import myheroModel from "@/app/utlis/model/heroModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const {
      title,
      desc,
      started,
      titlecolor,
      desccolor,
      startedcolor,
      titlesize,
      descsize,
      startedsize,
    } = await req.json();
    const hero = await myheroModel.create({
      title,
      desc,
      started,
      titlecolor,
      desccolor,
      startedcolor,
      titlesize,
      descsize,
      startedsize,
    });
    return NextResponse.json({
      message: " craeting hero",
      status: 200,
      data: hero,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "error craeting hero",
      status: 404,
      error: error.message,
    });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    await dbConfig();
    const hero = await myheroModel.find();
    return NextResponse.json({
      message: "Get hero",
      status: 200,
      data: hero,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "error getting hero",
      status: 404,
      error: error.message,
    });
  }
};
