
const express=require("express")
const { mongoose } = require("mongoose")
const userRoute = require("./routes/user.route")
const app=express()
const connection=require("./config/db")

app.use(express.json())

app.use("/user", userRoute);

app.listen(process.env.PORT, async () => {
    try {
      await connection;
      console.log("Connected to server");
    } catch (err) {
      console.log("Error in connection", err);
    }
    console.log(`Listen on port ${process.env.PORT}`);
  });