import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUSET,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUSET,
  PRODUCT_LIST_SUCCESS,
} from "../constant/ProductConst";
export const productListReduser = (
  state = { loadding: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUSET:
      return { loadding: true };
    case PRODUCT_LIST_SUCCESS:
      return { loadding: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loadding: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReduser =( 
  state = {loadding: true , product: {}} ,action
) =>{ 
  switch (action.type) {
    case PRODUCT_DETAILS_REQUSET:
      return { loadding: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loadding: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loadding: false, error: action.payload };
    default:
      return state;
  }
}