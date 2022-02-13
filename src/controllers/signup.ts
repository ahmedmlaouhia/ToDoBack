import userModel from "../models/user";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    if (username.length != 0 && password.length != 0) {
      await userModel.create({
        username,
        password,
      });
      res.status(201).send();
    } else res.status(400).send({ error: "username or password is empty" });
  } catch (err: any) {
    res.status(500).send({ error: "something went wrong" });
  }
};
