const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./routes/authRoutes/authRouter");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Wecare API");
});
app.use("/auth", authRouter);

app.listen(3001, () => {
  console.log("Server Running....");
});
