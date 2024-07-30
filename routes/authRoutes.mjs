import express from "express"
const router = express.Router()
import { createUser } from "../controllers/userCtrl.mjs"


router.post("/register", createUser)

export default router