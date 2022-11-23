import express from "express";
import carRoute from "./carRoute";

const router = express.Router()


router.use("/api/v1/cars", carRoute)


export default router