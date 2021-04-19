import express from "express"
import colors from "colors"
import cors from "cors"
import path from "path";
import connectToDatabase from "./DB.js";
const app = express()
app.use(express.json());
app.use(cors());



connectToDatabase();


app.get('/', (req, res) => { res.send('Hello from Express!') })
// app.use(express.static('../build'));

const PORT =  process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`<==server started on port==> ${PORT}`.yellow.underline.bold) 
})