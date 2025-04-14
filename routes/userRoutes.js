// Import Express framework
import express from "express";
// Import user controller functions
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
// Import validation middleware
import { validateUser } from "../middleware/validateUser.js";

// Create Express router instance
const router = express.Router();
// Route to get all users
router.get("/users", getAllUsers);
// Route to get a single user by ID
router.get("/users/:id", getUserById);
// Route to create a new user with validation
router.post("/user", validateUser, createUser);
// Route to update an existing user with validation
router.put("/user/:id", validateUser, updateUser);
// Route to delete a user
router.delete("/user/:id", deleteUser);

// Export router for use in main application
export default router;
