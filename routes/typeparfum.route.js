import express from 'express';
const router = express.Router();
import { getTypeparfums, getTypeparfumsID, createTypeparfum,  updateTypeparfum, deleteTypeparfum } from
'../controllers/typeparfum.controller.js';
/**
* @route GET /api/typeparfums
* @desc Get All typeparfums
* @access Public
*/
router.get('/', getTypeparfums);
/**
* @route POST /api/typeparfums
* @desc Ajouter une typeparfums
* @access Public
*/
router.post('/', createTypeparfum);
/**
* @route GET /api/typeparfums/:id
* @desc Renvoyer une typeparfums
* @access Public
*/
router.get('/:id', getTypeparfumsID);
/**
* @route PUT /api/typeparfums/:id
* @desc Modifier un typeparfum
* @access Public
*/
router.put('/:id', updateTypeparfum);
/**
* @route DELETE /api/typeparfums/:id
* @desc Supprimer une typeparfums
* @access Public
*/
router.delete('/:id', deleteTypeparfum);
export default router;