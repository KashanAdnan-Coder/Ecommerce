import express from "express"
const app = express()
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.mjs"
dotenv.config()
import dbConnect from "./config/dbConnect.mjs"
const PORT = process.env.PORT || 4000


app.use(express.json())
app.use("/api/user", authRoutes)
app.use("/", (req, res) => {
    res.send("Kashan")
})

dbConnect()

app.listen(PORT, () => {
    console.log(`Server is running in Port ${PORT}`);
})