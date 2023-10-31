import parkRepository from "../../repositories/park-Repository"


export async function ParkEntry(token:string) {

    return parkRepository.ParkEntry(token)

    
}

const parkService = {
    ParkEntry
}

export default parkService