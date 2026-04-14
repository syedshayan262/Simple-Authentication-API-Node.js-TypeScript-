import express from "express";
import authRoutes from "./routes/auth";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
