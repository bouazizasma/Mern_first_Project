import {GET_PARFUMS,DELETE_PARFUM,ADD_PARFUM,GET_SINGLE_PARFUM,UPDATE_PARFUM} from
"../types" 
import {ParfumService} from "../../services/Parfum-Service"; 
export const loadParfums=()=>{ 
 return (dispatch)=>{ 
    ParfumService.fetchParfums() 
 .then(res=>{ 
 dispatch({type:GET_PARFUMS, 
 payload:res.data}) 
 
 }).catch((error)=>console.log(error)); 
 
 } 
} 
export const loadSingleparfum=(_id)=>{ 
 return (dispatch)=>{ 
    ParfumService.fetchParfumById(_id) 
 .then((res)=>{ 
 dispatch({type:GET_SINGLE_PARFUM, 
 payload:res.data}); 
 }).catch((error)=>console.log(error)); 
 
 } 
} 
export const addparfum=(parfum)=>{ 
 return (dispatch)=>{ 
    ParfumService.addParfum(parfum) 
 .then((res)=>{ 
 dispatch({type:ADD_PARFUM, 
 payload:res.data}) 
 
 }).catch((error)=>console.log(error)); 
 
 } 
} 
export const deleteparfum=(_id)=>{ 
 return dispatch=>{ 
    ParfumService.deleteParfum(_id) 
 .then((res)=>{ 
 dispatch({type:DELETE_PARFUM, 
 payload:_id}) 
 }).catch((error)=>console.log(error));
} 
} 
export const updateparfum=(parfum)=>{ 
 return dispatch=>{ 
    ParfumService.editParfum(parfum) 
 .then((res)=>{ 
 dispatch({type:UPDATE_PARFUM, 
 payload:res.data}) 
 }).catch((error)=>console.log(error)); 
 
 } 
} 