import express from "express";
import {
  createHotel,
  getHotel,
  updateHotel,
  getHotels,
  deleteHotel,
  countByCity,
  countByType,
  getHotelRooms,
} from "../controllers/hotel.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

/// Create
router.post("/", verifyAdmin, createHotel);

/// Update
router.put("/:id", verifyAdmin, updateHotel);

// router.put("/:id", async (req, res) => {
//   try {
//     const updatedHotel = await Hotel.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updatedHotel);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

/// Delete
router.delete("/:id", verifyAdmin, deleteHotel);

// router.delete("/:id", async (req, res) => {
//   try {
//     await Hotel.findByIdAndDelete(req.params.id);
//     res.status(200).json("Hotel has been deleted");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

/// get
router.get("/find/:id", getHotel);

// router.get("/:id", async (req, res) => {
//   try {
//     const hotel = await Hotel.findById(req.params.id);
//     res.status(200).json(hotel);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

/// Get all
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);
// router.get("/", async (req, res, next) => {
//   try {
//     const hotels = await Hotel.find();
//     res.status(200).json(hotels);
//   } catch (err) {
//     next(err);
//   }
// });

export default router;
