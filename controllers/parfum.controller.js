import mongoose from 'mongoose'; 
import Parfum from '../models/Parfum.model.js'; 
export const getParfums = async (req, res) => { 
 try {
    const cat = await Parfum.find().populate('marques') 
    .populate('typeparfum') 
   ; 
    
    res.status(200).json(cat); 
    } catch (error) { 
    res.status(404).json({ message: error.message }); 
    } 
   } 
   export const getParfumByID = async (req, res) => { 
    try { 
    const par = await Parfum.findById(req.params.id).populate('marques') 
    .populate('typeparfum' ) 
    res.status(200).json(par); 
    } catch (error) { 
    res.status(404).json({ message: error.message }); 
    } 
   } 
   export const createParfum = async (req, res) => { 
    const { 
        reference,titre,prix,quantitédebouteille,couverture,typeparfum,marques } = req.body; 
    
    const newParfum = new Parfum({ 
        reference:reference,titre:titre,prix:prix,quantitédebouteille:quantitédebouteille,couverture:couverture,typeparfum:typeparfum,marques:marques }) 
    try { 
    await newParfum.save(); 
    res.status(201).json(newParfum ); 
    } catch (error) { 
    res.status(409).json({ message: error.message }); 
    } 
   } 
   export const updateParfum= async (req, res) => { 
    const { id } = req.params; 
    const { 
        reference,titre,prix,quantitédebouteille,couverture,typeparfum,marques} = 
   req.body; 
   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas 
de parfum avec un id: ${id}`); 
 const par1 = { 
    reference:reference,titre:titre,prix:prix,quantitédebouteille:quantitédebouteille,couverture:couverture,typeparfum:typeparfum,marques:marques, _id: id 
}; 
 await Parfum.findByIdAndUpdate(id, par1); 
 res.json(par1); 
} 
export const deleteParfum = async (req, res) => { 
 const { id } = req.params; 
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas 
de parfum avec l'ID: ${id}`); 
 await Parfum.findByIdAndDelete(id); 
 res.json({ message: "parfum supprimé avec succès." }); 
} 