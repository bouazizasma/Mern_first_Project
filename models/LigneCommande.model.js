import mongoose from "mongoose"
var ligneCommandeSchema = mongoose.Schema({ 
 quantitecommandee: Number, 
 totligne: Number, 
 refarticle: { 
 type: mongoose.Schema.Types.ObjectId, 
 ref: 'Parfum'
 }, 
 refcommande: { 
 type: mongoose.Schema.Types.ObjectId, 
 ref: 'Commande'
 }, 
}) 
const LigneCommande = mongoose.model('LigneCommande', ligneCommandeSchema); 
export default LigneCommande 
