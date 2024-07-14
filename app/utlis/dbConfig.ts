import { connect } from "mongoose";

// const dbConfig = async () => {
//   const url = " mongodb://localhost:27017/cmsDB";
//   try {
//     await connect(url).then(() => {
//       console.clear();
//       console.log("CMS connected");
//     });
//   } catch (error: any) {
//     console.error(error);
//   }
// };

const dbConfig = async () => {
  const url = "mongodb://localhost:27017/cmsDB";
  await connect(url).then(() => {
    console.clear();
    console.log("Server Up!");
  });
};

export default dbConfig;
