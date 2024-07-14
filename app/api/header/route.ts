import dbConfig from "@/app/utlis/dbConfig";
import myheaderModel from "@/app/utlis/model/headerModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { logo, links, call, btn } = await req.json();
    const head = await myheaderModel.create({ logo, links, call, btn });
    return NextResponse.json({
      message: " craeting header",
      status: 200,
      data: head,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "error craeting header",
      status: 404,
      error: error.message,
    });
  }
};
export const GET = async (req: NextRequest) => {
  try {
    await dbConfig();
    const head = await myheaderModel.find();
    return NextResponse.json({
      message: "Get header",
      status: 200,
      data: head,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "error getting header",
      status: 404,
      error: error.message,
    });
  }
};
