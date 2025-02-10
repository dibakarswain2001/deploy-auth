import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRouter.js";
import { removeUnverifiedAccounts } from "./automation/removeUnverifiedAccounts.js";

export const app = express();
config({ path: "./config.env" });

// ! connect front-end & back-end
app.use(
  cors({
    origin: "https://deploy-auth-frontend.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE","HEAD"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ! user router
app.use("/api/v1/user", userRouter);

removeUnverifiedAccounts();
// ! Db Connection
connection(process.env.MONGO_URI);

// ! error middleware
app.use(errorMiddleware);
