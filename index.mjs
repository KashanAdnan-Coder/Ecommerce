import express from "express"
const app = express()
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.mjs"
dotenv.config()
import dbConnect from "./config/dbConnect.mjs"
import { notFound, errorHandler } from "./middlewares/errorHandler.mjs"
const PORT = process.env.PORT || 4000
dbConnect()


app.use(express.json())

app.use("/api/user", authRoutes)

app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server is running in Port ${PORT}`);
})