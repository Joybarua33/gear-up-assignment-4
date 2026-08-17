import cookieParser from "cookie-parser";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./config";
import httpStatus from "http-status";
import { prisma } from "./lib/prisma";
import bcrypt from "bcryptjs";
import { userInfo } from "node:os";
import { userRoutes } from "./modules/user/user.route";
import { authRoutes } from "./modules/auth/auth.route";
import { gearRoutes } from "./modules/gear/gear.route";
import { categoryRoute } from "./modules/category/category.route";
import { providerRoute } from "./modules/provider/provider.route";



const app : Application = express();

app.use(cors({
    origin : config.app_url,
    credentials : true
}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

app.get("/", (req : Request, res : Response) =>{
    res.send("Hello world");
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", categoryRoute);
app.use("/api/provider", providerRoute);
app.use("/api", gearRoutes);

export default app;