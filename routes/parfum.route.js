import express from 'express'; 
const router = express.Router(); 
import { getParfums, getParfumByID, createParfum, updateParfum, deleteParfum } from
'../controllers/parfum.controller.js'; 
import {auth} from "../middleware/auth.js"

/**
 * @route GET /api/parfums
 * @desc Get All parfums
 * @access Public
 */
router.get('/',auth, getParfums); 
/**
 * @route POST /api/parfums
 * @desc Ajouter un parfum
 * @access Public
 */
 router.post('/', createParfum); 
 /**
  * @route GET /api/parfums/:id
  * @desc Renvoyer un parfum
  * @access Public
  */
 router.get('/:id', getParfumByID); 
 /**
  * @route PUT /api/parfums/:id
  * @desc Modifier un parfum
  * @access Public
  */
 router.put('/:id', updateParfum); 
 /**
  * @route DELETE /api/parfums/:id
  * @desc Supprimer un parfum
  * @access Public
  */
 router.delete('/:id', deleteParfum); 
 export default router; 