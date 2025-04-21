import { Router } from "express";
import { saludo, routeABC, ping, api } from "../controllers/index.controllers.js";

const router = Router();



router.get("/", saludo);
  
router.get("/ping", ping);
  
router.get("/api", api);
  
router.get("/a/b/c", routeABC);

export default router;