require("dotenv").config()
import cors from "cors"
const configCors = (app) => {
    app.use(cors({
        origin: process.env.REACT_URL,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 200,
        credentials: true
    }))
}
export default configCors