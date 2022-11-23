require("dotenv").config()

import express from "express"
import routes from "./routes";
import cors from 'cors'

const app = express()
app.use(express.json())

app.use(cors())

app.get("/", (req, res)=>{
    res.send("hello world")
})


app.use(routes)


const PORT = process.env.PORT || 4000
app.listen(PORT)
