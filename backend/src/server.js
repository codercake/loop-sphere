import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

console.log("mongo URI:", MONGO_URI);
app.listen(PORT, () => console.log("Server starting at port:", PORT));