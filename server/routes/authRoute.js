import express from "express"
import {createToken, parseToken} from "../jwt";


const router = express.Router()


router.get("/validate-token", async function (req, res, next){
    try {
        let token = req.headers["token"]
        if(!token){
            return res.status(500).send("token not found")
        }

        let data = await parseToken(token)

        res.status(200).json(data)
    } catch (ex){
        next(ex)
    }
})


router.post("/generate-token", function (req, res){
    const { userId, email } = req.body
    let token = createToken( userId, email)
    res.status(201).json({
        token
    })
})



export default router
