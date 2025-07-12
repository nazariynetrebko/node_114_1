import { Router } from "express";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
  patchProductController,
} from "../controllers/products.js";

const productsRouter = Router();

productsRouter.get("/", ctrlWrapper(getProductsController));

productsRouter.get("/:productId", ctrlWrapper(getProductByIdController));

productsRouter.post("/", ctrlWrapper(createProductController));

productsRouter.patch("/:productId", ctrlWrapper(patchProductController));

productsRouter.delete("/:productId", ctrlWrapper(deleteProductController));

export default productsRouter;
