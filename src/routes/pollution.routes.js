import express from "express";
import { addPollution, getAllPollution, updatePollution, deletePollution } from "../controllers/pollution.controller.js";

const router = express.Router();

router.post("/", addPollution);
router.get("/", getAllPollution);
router.put("/:id", updatePollution);
router.delete("/:id", deletePollution);

export default router;
