import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

const port = 3000;
const app = express();

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(`Some Error in Database : ${err}`);
  });

app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
