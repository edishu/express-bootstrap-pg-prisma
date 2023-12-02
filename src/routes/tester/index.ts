import { Router } from "express";
import { demoCreate } from "./demoCreate";

export const testerRouter = Router();

testerRouter.post("/demoCreate", demoCreate);
