const express = require("express");
const app = express();
const port = 3333;
const hotelRouter = require("./routers/hotels");
const session = require("express-session");

app.use(
  session({
    secret: "session-coder",
    resave: false,
    saveUninitialized: true,
  })
);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", hotelRouter);
app.listen(port, () => console.log("working"));
