import { Router } from "express";
import { categoryController } from "./category.controller";

const router = Router();

router.post("/categories", categoryController.createCategories);


export const categoryRoute = router;