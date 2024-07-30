import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 4000

app.use("/", (req, res) => {
    res.send("Kashan")
})

app.listen(PORT, () => {
    console.log(`Server is running in Port ${PORT}`);
})