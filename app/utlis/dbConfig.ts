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
  // const url = "mongodb://localhost:27017/cmsDB";
  const url =
    "mongodb+srv://pphoenixember:Rashpass@rashcode.4mccoaa.mongodb.net/cmsDB?retryWrites=true&w=majority&appName=Rashcode";
  await connect(url).then(() => {
    console.clear();
    console.log("Server done!");
  });
};

export default dbConfig;
