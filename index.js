import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
app.use(express.json());
app.use("/api", userRoutes);
app.use(errorHandler); // always after routes

const port = 2000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
