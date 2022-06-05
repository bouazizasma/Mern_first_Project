import Axios from "../Axios/Api"; 
const PARFUM_API="/parfums"
 const fetchParfums=async()=> { 
 return await Axios.get(PARFUM_API); 
 } 
 const fetchParfumById=async(parfumId)=> {
    return await Axios.get(PARFUM_API + '/' + parfumId); 
} 
const deleteParfum=async(parfumId) =>{ 
return await Axios.delete(PARFUM_API + '/' + parfumId); 
} 
const addParfum=async(parfum)=> { 
return await Axios.post(PARFUM_API, parfum); 

} 
const editParfum=(parfum) =>{ 
return Axios.put(PARFUM_API + '/' + parfum._id, parfum); 

} 

export const ParfumService = { 
    fetchParfums, 
fetchParfumById, 
deleteParfum, 
addParfum, 
editParfum 
} 