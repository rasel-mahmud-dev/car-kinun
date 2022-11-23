import axios from "axios"


export const backend = "http://localhost:4000"

export default axios.create({
    baseURL: backend,
    withCredentials: true
})

