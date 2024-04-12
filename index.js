const cookieParser = require("cookie-parser");
const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const userRouter = require("./routes/userRoutes");
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("all right");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
