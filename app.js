const express = require("express");
const dotenv = require("dotenv");
const user = require("./Routes/user.routes")
const morgan = require("morgan");
const connectDB = require("./config/db.config.js");
const cors = require("cors");

dotenv.config({
    path: "./config/config.env",
});

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

//app.use("/api/v1/expense-tracker", verifyAuth, expense);
app.use("/api/v1/", user);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);
    //close server and exit process
    server.close(() => process.exit(1));
});