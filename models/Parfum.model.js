import mongoose from "mongoose"
var parfumSchema = mongoose.Schema({ 
 reference: String, 
 titre: {type: String, required: true}, 
 prix: Number, 
 quantitédebouteille: Number, 
 couverture: String, 
 typeparfum: { 
 type: mongoose.Schema.Types.ObjectId, 
 ref: 'Typeparfum'
 },  
 marques: [{ 
 type: mongoose.Schema.Types.ObjectId, 
 ref: 'Marque'
 }] 
}) 
const Parfum = mongoose.model('Parfum', parfumSchema); 
export default Parfum 