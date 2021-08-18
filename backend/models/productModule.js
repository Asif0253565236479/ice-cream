import  mongoose  from "mongoose";



const productSchema = new mongoose.Schema(
    {
      name: { type: String, required: true, unique: true },
      image: { type: String, required: true },
      brand: { type: String, required: true },
      category: { type: String, required: true },
      disc: { type: String, required: true },
      price: { type: Number, required: true },
      stok: { type: Number, required: true },
      ratting: { type: Number, required: true },
      reviwe: { type: Number, required: true },
    },
    {
      timestamps: true,
    }
  );
  const Product = mongoose.model('Product', productSchema);
  
  export default Product;