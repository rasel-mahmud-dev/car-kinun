import express from "express";
import Common from "../models/Common";

const router = express.Router()


router.get("/", function (req, res, next){
    res.send([{name: 'car 1'}])
})


export default router