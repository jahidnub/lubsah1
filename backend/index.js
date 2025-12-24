import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoute from "./routes/cartRoutes.js";
import uploadRoutes from "./routes/uploadRoute.js"
import adminRoutes from "./routes/adminRoute.js";
import orderRoutes from "./routes/orderRoute.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const port = 4000;

connectDB();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/images", express.static("upload/images"));


app.use("/api", userRoutes)
app.use("/api", productRoutes)
app.use("/api", cartRoute)
app.use("/api", uploadRoutes);
app.use("/api", adminRoutes);
app.use("/api", orderRoutes); 

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

app.listen(port, () => {
  console.log("Server Running on Port " + port);
});
