import parkRepository from "../../repositories/park-Repository"


export async function ParkEntry(token:string) {

    return parkRepository.ParkEntry(token)

    
}

export async function ParkHistory(token:string) {
    return parkRepository.ParkHistory(token)
    
}

const parkService = {
    ParkEntry,
    ParkHistory
}

export default parkService