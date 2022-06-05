import {GET_TYPEPARFUMS} from '../types'
const initialState={ 
 typeparfums:[] 
}; 
const typeparfumsReducers =(state=initialState,action)=>{ 
 switch(action.type){ 
 case GET_TYPEPARFUMS: 
 return{ 
 ...state, 
 typeparfums:action.payload, 
 
 }; 
 default: return state 
 } 
} 
export default typeparfumsReducers 
