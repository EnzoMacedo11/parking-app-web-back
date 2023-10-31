import { Router} from "express";
import { ParkEntry, ParkHistory } from "../controllers/parking-Controller";

const parkRouter = Router();

parkRouter.post("/entry",ParkEntry)
parkRouter.get("/all",ParkHistory)

export default parkRouter