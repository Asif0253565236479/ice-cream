import {
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
