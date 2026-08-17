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
};

const getAllCategories = async () =>{
    const categories = await prisma.category.findMany({
        orderBy : {
            name : "desc"
        }
    });

    return categories;
};

export const categoryService = {
    createCategories,
    getAllCategories
}