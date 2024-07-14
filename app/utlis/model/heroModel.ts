import { Document, model, models, Schema } from "mongoose";
import { iHeroData } from "../interface";

const heroModel = new Schema<iHeroData>(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    started: {
      type: String,
    },
    titlecolor: {
      type: String,
    },
    desccolor: {
      type: String,
    },
    startedcolor: {
      type: String,
    },
    titlesize: {
      type: String,
    },
    descsize: {
      type: String,
    },
    startedsize: {
      type: String,
    },
  },
  { timestamps: true }
);

const myheroModel = models.Hero || model<iHeroData>("Hero", heroModel);

export default myheroModel;
