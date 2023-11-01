import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient

async function main(){
    await prisma.user.createMany({
        data:[
            {
                name: "admin",
                enrollment:"180498",
                password:"180498",
                admin:true,
                token:"admin 180498"
            },
            {
                name: "admin",
                enrollment:"180211",
                password:"180211",
                admin:true,
                token:"admin 180211"
            }
        ]
    })
}