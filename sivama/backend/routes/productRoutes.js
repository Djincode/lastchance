// import express from 'express';
// const router = express.Router();
// import {
//   getProducts,
//   getProductById,
//   createProduct,
//   updateProduct,
//   deleteProduct,
//   createProductReview,
//   getTopProducts,
// } from '../controllers/productController.js';
// import { protect, admin } from '../middleware/authMiddleware.js';
// import checkObjectId from '../middleware/checkObjectId.js';

// router.route('/').get(getProducts).post(protect, admin, createProduct);
// router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);
// router.get('/top', getTopProducts);
// router
//   .route('/:id')
//   .get(checkObjectId, getProductById)
//   .put(protect, admin, checkObjectId, updateProduct)
//   .delete(protect, admin, checkObjectId, deleteProduct);

// export default router;

import express from 'express';
const router = express.Router();
import {
  // getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
  getPages,
  getAllProducts
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

router.route('/').get(getPages).post(protect, admin, createProduct);  //getProducts
router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);
router.route('/all').get(getAllProducts);
router.get('/top', getTopProducts);
router
  .route('/:id')
  .get(checkObjectId, getProductById)
  .put(protect, admin, checkObjectId, updateProduct)
  .delete(protect, admin, checkObjectId, deleteProduct);

export default router;
