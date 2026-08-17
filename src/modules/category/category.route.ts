import { Router } from "express";
import { categoryController } from "./category.controller";

const router = Router();

router.post("/categories", categoryController.createCategories);
router.get("/categories", categoryController.getAllCategories);


export const categoryRoute = router;