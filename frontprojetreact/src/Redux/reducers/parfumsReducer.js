import {GET_PARFUMS,DELETE_PARFUM,ADD_PARFUM,GET_SINGLE_PARFUM,UPDATE_PARFUM} from
'../types'
const initialState={ 
 parfums:[], 
 parfum:{} 
 
}; 
const parfumsReducers =(state=initialState,action)=>{ 
 switch(action.type){ 
 case GET_PARFUMS: 
 return{ 
 ...state, 
 parfums:action.payload, 
 
 }; 
 case ADD_PARFUM: 
 return{ 
 ...state, 
 parfums : [...state.parfums, action.payload], 
 parfum:action.payload 
 }; 
 case DELETE_PARFUM: 
 return{ 
 ...state, 
 parfums: state.parfums.filter(parfum=> parfum._id !==action.payload) 
 }; 
 case UPDATE_PARFUM: 
 return { 
 ...state, 
 parfums:state.parfums.map(parfum => parfum._id ===action.payload._id ? (parfum = action.payload) : parfum) 
 }; 
 case GET_SINGLE_PARFUM: 
 return { ...state, 
    parfum:action.payload }; 
 default: return state 
 } 
} 
export default parfumsReducers 