import { connect } from "mongoose";

const dbConfig = async () => {
  try {
    await connect("mongodb://localhost:27017/cmsDB").then(() => {
      console.clear();
      console.log("CMS connected");
    });
  } catch (error: any) {
    console.error(error);
  }
};

export default dbConfig;
