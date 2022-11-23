import express from "express";
import Car from "../models/Car";
import response from "../response";

const router = express.Router()


router.get("/count", async function (req, res, next) {
    try {
        let cars = await (await Car.collection).countDocuments()
        response(res, cars)
    } catch (ex) {
        next(ex)
    }
})

router.get("/", async function (req, res, next) {
    try {
        const {perPage=1, currentPage = 20} = req.query
        let cars = await (await Car.collection)
            .find()
            .skip((Number(currentPage) - 1) * Number(perPage))
            .limit(Number(perPage))
            .toArray()
        response(res, cars)
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
            response(res, newCar, 201)
        } else {
            response(res, "Car insert fail", 403)
        }
    } catch (ex) {
        next(ex)
    }
})


export default router