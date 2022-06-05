import express from 'express';
const router = express.Router();
import { getMarques, getMarqueByID, createMarque, updateMarque, deleteMarque } from '../controllers/marque.controller.js';

/**
 * @route   GET /api/marques
 * @desc    Get All marques
 * @access  Public
 */
router.get('/', getMarques);

/**
 * @route   POST /api/marques
 * @desc    Ajouter une marque
 * @access  Public
 */
router.post('/', createMarque);

/**
 * @route   GET /api/marques/:id
 * @desc    Renvoyer une marque
 * @access  Public
 */
router.get('/:id', getMarqueByID);

/**
 * @route   PUT /api/marques/:id
 * @desc    Modifier une marque
 * @access  Public
 */
router.put('/:id', updateMarque);

/**
 * @route  DELETE /api/marques/:id
 * @desc    Supprimer une marque
 * @access  Public
 */
router.delete('/:id', deleteMarque);

export default router;
