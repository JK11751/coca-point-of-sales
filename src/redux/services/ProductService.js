import axios from "axios";
import { BACKEND_URL } from "../../utils/api";

export const PRODUCT_URL = `${BACKEND_URL}/products`;

const fetchProducts = async (categoryType) => {
    const response = await axios.get(`${PRODUCT_URL}?categoryType=${categoryType}`);
    
    console.log('Category Type in fetch:', categoryType); 
    console.log("API Response:", response.data);
  return response.data; 
  
};

const ProductService = {
  fetchProducts,
};

export default ProductService;
