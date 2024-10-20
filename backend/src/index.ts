import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const port = 3000;

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(`Some Error in Database : ${err}`);
  });

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
