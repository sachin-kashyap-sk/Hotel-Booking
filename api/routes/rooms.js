import express from "express";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,

} from "../controllers/room.js";
import { updateRoomAvailability } from '../controllers/room.js';
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create
router.post("/:hotelid", verifyAdmin, createRoom);

/// Update
router.put("/:id", verifyAdmin, updateRoom);
router.put("availability/:id", updateRoomAvailability);

/// Delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

/// get
router.get("/:id", getRoom);

/// Get all
router.get("/", getRooms);

export default router;
