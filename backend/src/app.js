import express from 'express'
import cors from 'cors'
import cookieparser from 'cookie-parser'


const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}))

app.use(express.json({limit:"24kb"}));
app.use(express.urlencoded({limit:"24kb" ,  extended:true}));
app.use(cookieparser());

import {router} from "./routes/UserRoute.js"

app.use("/user" , router)





export {app}