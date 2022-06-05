import Axios from "../Axios/Api"; 
const Typeparfum_API="/typeparfums"
 const fetchTypeparfums=async()=> { 
 return await Axios.get(Typeparfum_API); 
 } 
 
 export const TypeparfumService = { 
    fetchTypeparfums
 } 