import userModel from "../models/user";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    if (username.length != 0 && password.length != 0) {
      const user = await userModel.findOne({ username });
      if (user) {
        if (user.password === password) {
          delete user.password;
          const token = jwt.sign({ user }, "khlkjbhiphiihbblhdz");
          res.status(200).send({ token: token, user: user });
        } else res.status(400).send({ error: "wrong password" });
      } else res.status(400).send({ error: "user does not exist" });
    } else res.status(400).send({ error: "username or password is empty" });
  } catch (err: any) {
    res.status(500).send({ error: "something went wrong" });
  }
};
