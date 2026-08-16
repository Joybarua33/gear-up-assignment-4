import { prisma } from "../../lib/prisma"
import { ICategories } from "./category.interface"

const createCategories = async (payload : ICategories) =>{
    const {name, slug, icon} = payload;

    const existingCategories = await prisma.category.findUnique({
        where : {
            name
        }
    })

    if(existingCategories){
        throw new Error("Category already Exist");
    }

    const category = await prisma.category.create({
        data : {
            name,
            slug,
            icon
        }
    })

    return category;
}   

export const categoryService = {
    createCategories
}