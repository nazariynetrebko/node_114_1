import { Product } from "../db/schemas/Product.js";

export const getProducts = () => Product.find();

export const getProduct = (productId) => Product.findById(productId);

export const createProduct = (payload) => Product.create(payload);

export const updateProduct = async (productId, payload, options = {}) => {
  const rawResult = await Product.findByIdAndUpdate(
    {
      _id: productId,
    },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    }
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    student: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deleteProduct = (contactId) =>
  Product.findOneAndDelete({
    _id: contactId,
  });
