import express from 'express'
const router = express.Router()
import { addOrderItems, getOrderById, updateOrderToPaid } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems)
router.route('/:id/pay').get(protect, updateOrderToPaid)
router.route('/:id').get(protect, getOrderById)

export default router