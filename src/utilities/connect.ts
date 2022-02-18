import { connect as cnt } from "mongoose";

const connect = async (callback: () => void) => {
  try {
    await cnt("mongodb://root:root@mongo:27017/SampleDB?authSource=admin");
    console.log("Connected to MongoDB");
    callback();
  } catch (error) {
    console.log(error);
  }
};

export default connect;
