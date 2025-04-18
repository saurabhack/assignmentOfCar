import { Router } from "express";
import allData from "../Controller/allData.controller.js";

const carRouter=Router()

carRouter.get('/car',allData)

export default carRouter;