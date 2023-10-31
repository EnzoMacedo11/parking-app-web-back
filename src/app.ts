import "reflect-metadata";
import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";

import { loadEnv, connectDb, disconnectDB } from "./config";
import userRouter from "./routers/user-router";
import parkRouter from "./routers/parking-router";

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .use("/user",userRouter)
  .use("/park",parkRouter)


export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
