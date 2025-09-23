import express from "express";
import dotenv from "dotenv";
import viewEngine from "./configs/viewEngine.js";
import initApiRoutes from "./routes/api.js";
import mongoConnect from "./configs/mongoConnect.js";
import bodyParser from 'body-parser';
import configCors from './configs/cors'
import initWebRoutes from "./routes/web.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//cors
configCors(app)

// DB + View + Routes
mongoConnect();
viewEngine(app);
initWebRoutes(app);
initApiRoutes(app);


app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
