import express from 'express';
import cors from 'cors';
import cookieparser from 'cookie-parser';

const app = express();

app.use("*",cors({
    origin: process.env.CORS_ORIGIN,  // Allow requests from this origin
    credentials: true                 // Allow cookies and credentials to be sent
}));

app.use(express.json({ limit: "24kb" }));
app.use(express.urlencoded({ limit: "24kb", extended: true }));
app.use(cookieparser());

import { userrouter } from "./routes/UserRoute.js";
app.use("/user", userrouter);

import { blogrouter } from "./routes/BlogRoute.js";
app.use("/blog", blogrouter);

export { app };
