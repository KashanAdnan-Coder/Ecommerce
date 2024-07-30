import User from '../models/userModel.mjs'
import asyncHandler from "express-async-handler"

const createUser = asyncHandler(
    async (req, res) => {
        const email = req.body.email
        const findUser = await User.findOne({ email })
        if (!findUser) {
            // create a new user
            const newUser = await User.create(req.body)
            res.json(newUser)
        } else {
            // User Already Exist
            throw new Error("User Already Exists")
        }
    }
)

export {
    createUser
}