import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connect from "./utilities/connect";
import morgan from "morgan";
import auth from "./routes/auth";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(auth);
app.use(morgan("dev"));

connect(() =>
  app.listen(6969, () => {
    console.log("Server running on port 6969");
  })
);
