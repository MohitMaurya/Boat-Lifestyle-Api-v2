const express = require("express");
const connect = require("./config/db");

const productController = require("./controller/productController");
const signupController = require("./controller/signupController");

const app = express();
app.use(express.json());
let cors = require("cors");
app.use(cors());

app.use("/product", productController);
app.use("/user", signupController);

const PORT = 3002;
app.listen(PORT, async () => {
    await connect();
    console.log("listening on port " + PORT);
});
