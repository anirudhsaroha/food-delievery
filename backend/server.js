import express from "express"
import cors from 'cors'
import { db } from "./config/db.js";
import foodRouter from "./route/foodRoute.js";

const app = express();
const port = 4000;

db.connect();

app.use("/api/food", foodRouter);
app.use(cors())
app.use(express.json())

app.get("/" , (req, res) => {
    res.send("API is working");
} )

app.listen( port, () => {
    console.log('server is running on the port 4000');
});