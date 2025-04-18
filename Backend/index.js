import express from "express";
import cors from "cors";
import carRouter from "./Router/car.router.js";

const app = express();
const port = 3000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,               
}));
app.use(express.json());            

app.use("/api", carRouter);

app.listen(port, () => {
  console.log(`🚗 Server is running at http://localhost:${port}`);
})