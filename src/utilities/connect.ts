import { connect as cnt } from "mongoose";

const connect = async (callback: () => void) => {
  try {
    await cnt(`${process.env.MONGODB_URI}`);
    console.log("Connected to MongoDB");
    callback();
  } catch (error) {
    console.log(error);
  }
};

export default connect;
