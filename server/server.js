require("dotenv").config()

import express from "express"
import routes from "./routes";
import cors from 'cors'

const app = express()
app.use(express.json())

const whitelist = [process.env.FRONTEND]
const corsOptions = {
    credentials: true,
    origin: function (origin, callback) {

        if(whitelist.indexOf(origin) !== -1) {
            callback(null, true)

        } else {
            // no access
            callback(null, false)
        }
    }
}

app.use(cors(corsOptions))

app.get("/", (req, res)=>{
    res.send("hello world")
})


app.use(routes)


app.use((err, req, res)=>{
    res.status(500).json({message: err.message})
})


const PORT = process.env.PORT || 4000
app.listen(PORT)
