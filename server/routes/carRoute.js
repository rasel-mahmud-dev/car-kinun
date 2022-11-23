import express from "express";

const router = express.Router()


router.get("/", function (req, res, next){
    res.send([{name: 'car 1'}])
})


export default router