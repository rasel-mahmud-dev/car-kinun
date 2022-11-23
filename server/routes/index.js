import express from "express";
import carRoute from "./carRoute";
import authRoute from "./authRoute";


const router = express.Router()


router.use("/api/v1/cars", carRoute)
router.use("/api/v1/auth", authRoute)


export default router