import React, { useEffect } from "react"; 
import { useDispatch } from "react-redux"; 
import {loadParfums} from "../../Redux/actions/parfumsAction"
import AfficheParfums from "./AfficheParfums"
const ListParfums=()=>{ 
 
 const dispatch = useDispatch(); 
 
 useEffect(() => { 
 dispatch(loadParfums()); 
 }); 
 
 
 return( 
 
 <div><AfficheParfums/></div>
 ) 
} 
export default ListParfums 