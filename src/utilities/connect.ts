import { connect as cnt } from "mongoose";

const connect = async (callback: () => void) => {
  try {
    await cnt("mongodb://172.19.0.2:27017/SampleDB");
    console.log("Connected to MongoDB");
    callback();
  } catch (error) {
    console.log(error);
  }
};

export default connect;
