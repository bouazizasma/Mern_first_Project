import React, { useState, useEffect } from "react"; 
import { useNavigate,useParams } from "react-router-dom"; 
import {loadSingleparfum,updateparfum} from "../../Redux/actions/parfumsAction"; 
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
const EditParfum=()=>{ 
    const [state, setState] = useState({ 
        reference: "", titre: "", 
    prix:"",quantitédebouteille:"",typeparfum:"",marques:[] 
    }); 
    
    const [Marq, setMarq] = useState([]) 
    const [files, setFiles] = useState("") 
    
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    const params = useParams(); 
    const _id=params._id; 
    useEffect(() => { 
    dispatch(loadSingleparfum(_id)); 
    dispatch(loadTypeparfums());
    dispatch(loadMarques()); 
    setFiles(""); 
    },[_id,dispatch]); 
    
    const parfum = useSelector((state) => state.allparfums.parfum); 
    const typeparfums = useSelector((state) =>state.alltypeparfums.typeparfums); 
    const listemarques = useSelector((state) =>state.allmarques.marques); 
    
    useEffect(()=>{ 
    setState(parfum); 
    setFiles(parfum.couverture) 
    },[parfum]); 
    const handleSubmit = async(event)=> { 
    event.preventDefault(); 
    console.log(Marq) 
    const par={ 
    _id:_id, 
    reference: state.reference, 
    titre:state.titre, 
    prix:state.prix, 
    quantitédebouteille:state.quantitédebouteille, 
    couverture : files[0].file.name, 
    typeparfum:state.typeparfum, 
    marques:Marq.length>0?Marq:state.marques 
    }; 
    dispatch(updateparfum(par)); 
    navigate("/parfums"); 
    } 
    const handelInputChange=(e)=>{ 
    const {name,value}=e.target; 
    setState({...state,[name]:value}); 
    } 
    const labeltypeparfum=()=>{ 
    if( state.typeparfum){ 
    if( state.typeparfum.nomtype) return "Type :"+state.typeparfum.nomtype 
    } 
    else return null
    } 
    const labelmarque=()=>{ 
    if(state.marques) { 
    let ch=""
    state.marques.map((Marq)=>{ 
    if(Marq.nommarque) 
    ch = ch+Marq.nommarque 
    }) 
    return ch 
    } 
    else return null
    } 
    const handleMarques=(event)=>{ 
    setState({...state,"marques": []}); 
    
    setMarq(event.target.value); 
    
    } 
    return (
        <div className="container">
 
 <form style={{ marginLeft: 8}}>
 <div>
 <Button color="secondary" variant="contained"
onClick={(event)=>handleSubmit(event)}>Modifier</Button>
 </div>
 <FormControl> 
 <TextField name="reference"
 variant="outlined"
label="reference"
value={state.reference}
 onChange={handelInputChange}
 required 
style={{ margin: 10}}/>
 <TextField name="titre"
 variant="outlined"
label="Titre"
value={state.titre}
 onChange={handelInputChange}
 required 
style={{ margin: 10}}/> 
 <TextField name="prix"
 variant="outlined"
type="Number"
label="Prix"
value={state.prix}
 onChange={handelInputChange}
 style={{ margin: 10}}/>
 <TextField name="quantitédebouteille"
 variant="outlined"
type="Number"
label="quantitédebouteille"
value={state.quantitédebouteille}
 onChange={handelInputChange}
 style={{ margin: 10}}/>
 
 <TextField name="typeparfum"
 variant="outlined"
 select
 label={labeltypeparfum()}
 value={state.typeparfum}
 onChange={handelInputChange}
 style={{ margin: 10}}>
 
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
 name="marques"
 variant="outlined"
 select
 label={labelmarque()}
 SelectProps={{multiple: true}}
 value={Marq?Marq:state.marques}
 helperText="Sélectionner des marques"
 onChange={(event)=>handleMarques(event)}
 >
 {
 listemarques ? 
 listemarques.map((Marq)=>
 <MenuItem key={Marq._id}
value={Marq._id}>{Marq.nommarque}</MenuItem>
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
export default EditParfum 