import { NextFunction, Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { providerService } from "./provider.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus  from "http-status";

const addGear = catchAsync(async (req : Request, res : Response, next : NextFunction) =>{
    const payload = req.body;
    const providerId = req.user?.id;

    const result = await providerService.addGear(providerId as string, payload);

    sendResponse(res , {
        success : true,
        statusCode : httpStatus.CREATED,
        message : "Gear added successfully",
        data : result
    })
});

const updateGear = catchAsync(async (req : Request, res : Response, next : NextFunction) =>{
    const {id}  = req.params;
    const providerId = req.user?.id;
    const payload = req.body;

    const result = await providerService.updateGear(id as string, providerId as string, payload);

    sendResponse(res, {
        success : true,
        statusCode : httpStatus.OK,
        message : "Gear updated successfully",
        data : result
    })
})

const deleteGear = catchAsync(async(req : Request, res : Response, next : NextFunction) =>{
    const {id} = req.params;
    const providerId = req.user?.id;

    const result = await providerService.deleteGear(id as string, providerId as string);

    sendResponse(res, {
        success : true,
        statusCode : httpStatus.OK,
        message : "Gear deleted successfully",
        data : result
    })
})


export const providerController = {
    addGear,
    updateGear,
    deleteGear
}