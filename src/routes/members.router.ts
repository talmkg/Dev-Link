import express, { Express, Request, Response } from "express";
import { Member } from "../database/db";
const membersRouter = express.Router();

membersRouter.post("/api/members", async (req: Request, res: Response) => {
  try {
    const requested_member = req.body;
    const new_member = await Member.create(requested_member);
    res.status(200).json(new_member);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default membersRouter;