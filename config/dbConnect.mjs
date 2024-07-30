import mongoose from "mongoose"

const dbConnect = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected!")
    } catch (error) {
        console.log("Database error");
    }
}

export default dbConnect