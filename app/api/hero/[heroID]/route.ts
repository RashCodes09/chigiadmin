import dbConfig from "@/app/utlis/dbConfig";
import myheroModel from "@/app/utlis/model/heroModel";
// import myheroModel from "@/app/utlis/model/heroModel";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { heroID } = await params;
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
    const hero = await myheroModel.findByIdAndUpdate(
      heroID,
      {
        title,
        desc,
        started,
        titlecolor,
        desccolor,
        startedcolor,
        titlesize,
        descsize,
        startedsize,
      },
      { new: true }
    );
    return NextResponse.json({
      message: " updating hero",
      status: 200,
      data: hero,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "error updating hero",
      status: 404,
      error: error.message,
    });
  }
};
