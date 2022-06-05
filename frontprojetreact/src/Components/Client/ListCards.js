import React, { useEffect } from "react"; 
import { useDispatch } from "react-redux"; 
import {loadParfums} from "../../Redux/actions/parfumsAction"
import AfficheCards from "./AfficheCards"
const ListCards=()=>{ 
 
 const dispatch = useDispatch(); 
 
 useEffect(() => { 
 dispatch(loadParfums()); 
 }); 
 
 
 return( 
 
 <div><AfficheCards/></div>
 ) 
} 
export default ListCards 
