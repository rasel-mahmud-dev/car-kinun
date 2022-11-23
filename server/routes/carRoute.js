import express from "express";
import Car from "../models/Car";

const router = express.Router()


router.get("/", async function (req, res, next) {
    try {

        let cars = await (await Car.collection).find().toArray()
        res.send(cars)
    } catch (ex) {
        next(ex)
    }
})


export default router