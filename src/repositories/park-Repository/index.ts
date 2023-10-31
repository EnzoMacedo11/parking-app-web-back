import { prisma } from "../../config";

async function ParkEntry(token:string) {

    const tokenUser = await prisma.user.findFirst({
        where:{token}
    })
    
    if(tokenUser){
        const currentTime = new Date();
        const formattedTime = `${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2, '0')}`
        await prisma.history.create({
            data:{
                token,
                enrollment: tokenUser.enrollment
            }
        })
        return `${formattedTime}: Bem vindo ${tokenUser.name}`
    }else{
        throw new Error("Token Inválido")
    }
}

const parkRepository = {
    ParkEntry
}

export default parkRepository