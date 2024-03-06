import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoute.js";

const app = express();
//  Middleware to allow cross-origin resource sharing
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, //  allows cookies to be included
  })
);

// Middleware to parse JSON request body
app.use(express.json()); // to support JSON-encoded
app.use("/auth", adminRouter);
app.use(express.static("Public"));

app.listen(3000, () => {
  console.log("Server is running");
});
