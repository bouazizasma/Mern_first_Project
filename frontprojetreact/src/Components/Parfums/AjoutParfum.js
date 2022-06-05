import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; 
import {addparfum} from "../../Redux/actions/parfumsAction"; 
import {loadTypeparfums} from "../../Redux/actions/typeparfumsAction"; 
import {loadMarques} from "../../Redux/actions/marquesAction"; 
import {useDispatch, useSelector} from "react-redux"; 
import Button from '@mui/material/Button'; 
import TextField from '@mui/material/TextField'; 
import FormControl from '@mui/material/FormControl'; 
import MenuItem from '@mui/material/MenuItem'; 
import { FilePond,registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'; 
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview) 
const AjoutParfum=()=>{ 
 const [reference, setReference] = useState(""); 
 const [titre, setTitre] = useState(""); 
 const [prix, setPrix] = useState(""); 
 const [quantitédebouteille, setQuantitédebouteille] = useState(""); 
 const [typeparfum, setTypeparfum] = useState("");  
 const [Marq, setMarq] = useState([]); 
 const [files, setFiles] = useState("") 
 
 const dispatch = useDispatch(); 
 const navigate = useNavigate(); 
 useEffect(() => { 
    dispatch(loadTypeparfums()); 
    
    dispatch(loadMarques()); 
    },[dispatch]); 
    const typeparfums = useSelector((state) =>state.alltypeparfums.typeparfums); 
    const marques = useSelector((state) =>state.allmarques.marques); 
    
    const handleSubmit = async(event)=> { 
    event.preventDefault(); 
    const par={ 
    reference: reference, 
    titre:titre, 
    prix:prix, 
    quantitédebouteille:quantitédebouteille, 
    couverture : files[0].file.name, 
    typeparfum:typeparfum, 
    Marq:Marq
    }; 
    dispatch(addparfum(par)); 
    navigate("/parfums"); 
    } 
    return ( 
    
    <div className="container">
    
    <form style={{ marginLeft: 8}}>
    <div>
    <Button variant="contained"
   onClick={(event)=>handleSubmit(event)}>Ajout</Button>
    </div>
    <FormControl> 
    <TextField
    variant="outlined"
   label="reference"
   value={reference}
    onChange={e => setReference(e.target.value)}
    required />
    <TextField
    variant="outlined"
   label="Titre"
   value={titre}
    onChange={e => setTitre(e.target.value)}
    required /> 
    <TextField
    variant="outlined"
   type="Number"
   label="Prix"
   value={prix}
    onChange={e => setPrix(e.target.value)}
    /> 
    <TextField
    variant="outlined"
   type="Number"
   label="Quantité"
   value={quantitédebouteille}
    onChange={e => setQuantitédebouteille(e.target.value)}
    />
    <TextField
       variant="outlined"
 select
 label="typeparfum"
 value={typeparfum}
 helperText="Sélectionner une typeparfum"
 onChange={e => setTypeparfum(e.target.value)}
 >
     {
 typeparfums ? 
 typeparfums.map((spec)=>
 <MenuItem key={spec._id}
value={spec._id}>{spec.nomtype}</MenuItem>
 ) 
 :null
 }
 </TextField>
    <TextField
    variant="outlined"
    select
    label="marque"
    SelectProps={{multiple: true}}
    value={Marq}
    helperText="Sélectionner une marque"
    onChange={e => setMarq(e.target.value)}
    >
    {
    marques ?
    marques.map((edi)=>
 <MenuItem key={edi._id}
value={edi._id}>{edi.nommarque}</MenuItem>
 ) 
 :null
 }
 </TextField> 
 
 </FormControl> 
 </form>
 
 <h4>Télécharger Image</h4>
 <FormControl> 
 <div style={{width:300, height:50}}>
 <FilePond
 files={files}
 allowMultiple={false}
 onupdatefiles={setFiles}
 labelIdle='<span class="filepond--label-action">Browse 
One</span>'
 />
 </div>
 </FormControl>
 </div> 
 );} 
export default AjoutParfum 
