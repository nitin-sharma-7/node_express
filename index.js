// Import Express framework
import express from "express";
// Import user routes
import userRoutes from "./routes/userRoutes.js";
// Import error handling middleware
import { errorHandler } from "./middleware/errorHandler.js";

// Initialize Express application
const app = express();
// Middleware to parse JSON request bodies
app.use(express.json());
// Mount user routes under /api path
app.use("/api", userRoutes);
app.use(errorHandler); // always after routes

// Set server port
const port = 2000;
// Start the server and listen on specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
