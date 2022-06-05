import mongoose from 'mongoose';
import Typeparfum from '../models/Typeparfum.model.js';
export const getTypeparfums = async (req, res) => {   
try {
const cat = await Typeparfum.find(); 
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getTypeparfumsID = async (req, res) => { 
try {
const typ = await Typeparfum.findById(req.params.id);
res.status(200).json(typ);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createTypeparfum = async (req, res) => { 
const { nomtype } = req.body;
const newTypeparfum = new Typeparfum({ nomtype:nomtype })
try { 
await newTypeparfum.save();
res.status(201).json(newTypeparfum );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateTypeparfum= async (req, res) => {
const { id } = req.params;
const { nomtype } = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas 
de specialité avec un id: ${id}`);
const typpar1 = { nomtype:nomtype, _id: id };
await Typeparfum.findByIdAndUpdate(id, typpar1);
res.json(typpar1);
}
export const deleteTypeparfum = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas 
de specialité avec l'ID: ${id}`);
await Typeparfum.findByIdAndDelete(id);
res.json({ message: " supprimée avec succès." });
}