import { Router} from "express";
import { ParkEntry } from "../controllers/parking-Controller";

const parkRouter = Router();

parkRouter.post("/entry",ParkEntry)

export default parkRouter