import { NextFunction, Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { categoryService } from "./category.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";


const createCategories = catchAsync (async (req : Request, res : Response, next : NextFunction) =>{
    const payload = req.body;

    const result = await categoryService.createCategories(payload);

    sendResponse(res, {
        success : true,
        statusCode : httpStatus.CREATED,
        message : "Category created successfully",
        data : result
    })
})

const getAllCategories = catchAsync(async(req : Request, res : Response, next: NextFunction) =>{
    const result = await categoryService.getAllCategories();

    sendResponse(res, {
        success : true,
        statusCode : httpStatus.OK,
        message : "Category retrieved Successfully",
        data : result
    })
})

export const categoryController = {
    createCategories,
    getAllCategories
}