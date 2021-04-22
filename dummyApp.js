const express = require("express");
const app = express();
const port = 3333;
const router = require("./routers/index");
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
app.use("/", router);
app.get("/", (req, res) => res.redirect("/hotels"));

app.listen(port, () => console.log("working"));
