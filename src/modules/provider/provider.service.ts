import { prisma } from "../../lib/prisma";
import { IGeraPayload} from "./provider.interface"

const addGear = async (providerId: string, payload : IGeraPayload) =>{
    const {title, description, brand, pricePerDay, isAvailable, categoryId, image} = payload;

    if(!providerId){
        throw new Error("Provider Id Required");
    }

    const gear = await prisma.gearItem.create({
        data : {
            title,
            description,
            brand,
            pricePerDay : Number(pricePerDay),
            isAvailable : isAvailable ?? true,
            providerId : providerId,
            categoryId : categoryId, 
            image : image || []
        }
    });

    return gear;
};

const updateGear = async (gearId: string, providerId : string, payload : IGeraPayload) =>{
    const gear = await prisma.gearItem.findUnique({
        where : {
            id : gearId
        }
    })
    if(!gear){
        throw new Error("Gear not Found!");
    }

    if(gear.providerId !== providerId){
        throw new Error("You are not authorized to update gear");
    };

    const updateGear = await prisma.gearItem.update({
        where : {
            id : gearId
        },
        data : payload
    })

    return updateGear;
};

const deleteGear = async(gearId : string, providerId : string) =>{
    const gear = await prisma.gearItem.findUnique({
        where : {
            id : gearId
        }
    })

    if(!gear){
        throw new Error("Gear Not Found");
    };

    if(gear.providerId !== providerId){
        throw new Error("You are not authorized to delete gear");
    };

    const result = await prisma.gearItem.delete({
        where : {
            id : gearId
        }
    });

    return result;
}



export const providerService = {
    addGear,
    updateGear,
    deleteGear
}