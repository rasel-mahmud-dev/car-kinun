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

router.post("/", async function (req, res, next) {
    try {
        const {name, price, brand, description, image, userId, model, attributes} = req.body
        let newCar = new Car({
            name,
            price,
            image,
            model,
            brand,
            userId,
            description,
            attributes,
        })

        newCar = await newCar.save()
        if (newCar) {
            res.status(201).send(newCar)
        } else {
            res.send("Car insert fail")
        }
    } catch (ex) {
        next(ex)
    }
})


export default router