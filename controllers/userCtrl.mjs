import User from '../models/userModel.mjs'

const createUser = async (req, res) => {
    const email = req.body.email
    const findUser = await User.findOne({ email })
    if (!findUser) {
        // create a new user
        const newUser = await User.create(req.body)
        res.json(newUser)
    } else {
        // User Already Exist
        res.json({
            msg: "User Already Exists",
            success: false
        })
    }
}

export {
    createUser
}