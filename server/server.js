import express from "express"
import routes from "./routes";


const app = express()

app.get("/", (req, res)=>{
    res.send("hello world")
})


app.use(routes)


const PORT = process.env.PORT || 4000
app.listen(PORT)
