import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { validateUser } from "../middleware/validateUser.js";

const router = express.Router();
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/user", validateUser, createUser);
router.put("/user/:id", validateUser, updateUser);
router.delete("/user/:id", deleteUser);

export default router;
