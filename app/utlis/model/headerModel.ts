import { model, models, Schema } from "mongoose";
import { iHeaderData } from "../interface";

const HeaderModel = new Schema<iHeaderData>(
  {
    logo: {
      type: String,
    },
    links: {
      type: String,
    },
    call: {
      type: String,
    },
    btn: {
      type: String,
    },
  },
  { timestamps: true }
);

const myheaderModel =
  models.Header || model<iHeaderData>("Header", HeaderModel);

export default myheaderModel;
