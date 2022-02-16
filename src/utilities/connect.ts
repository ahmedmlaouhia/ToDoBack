import { connect as cnt } from "mongoose";
import dotenv from "dotenv";

const connect = async (callback: () => void) => {
  dotenv.config();
  try {
    await cnt(`${process.env.MONGODB_URI}`);
    console.log("Connected to MongoDB");
    callback();
  } catch (error) {
    console.log(error);
  }
};

export default connect;
