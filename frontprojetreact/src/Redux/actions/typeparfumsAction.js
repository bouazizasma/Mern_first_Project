import {GET_TYPEPARFUMS} from "../types" 
import {TypeparfumService} from "../../services/Typeparfum-Service"; 
export const loadTypeparfums=()=>{ 
 return (dispatch)=>{ 
    TypeparfumService.fetchTypeparfums() 
 .then(res=>{ 
 dispatch({type:GET_TYPEPARFUMS, 
 payload:res.data}) 
 
 }).catch((error)=>console.log(error)); 
 
 } 
} 
