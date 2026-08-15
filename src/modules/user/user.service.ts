import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";
import config from "../../config";
import { RegisterUserPayload } from "./user.interface";


const registerUserIntoDB = async (payload : RegisterUserPayload) =>{
    const {name, email, password} = payload;

    const isUserExist = await prisma.user.findUnique({
        where : {email}
    });

    if(isUserExist){
        throw new Error("User with this email already exist");
    };

    const hashPassword = await bcrypt.hash(password, Number(config.bcrypt_salt_round));

    const createUser = await prisma.user.create({
        data : {
            name,
            email, 
            password : hashPassword
        }
    });

    const user = await prisma.user.findUnique({
        where : {
            id : createUser.id,
            email : createUser.email
        },
        omit : {
            password : true
        },
        include : {
            gearItems : true
        }
    });

    return user;
};

const getMyProfile = async () =>{
    
}

export const userService = {
    registerUserIntoDB,
    getMyProfile,
}