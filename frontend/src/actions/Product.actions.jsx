import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUSET,
  PRODUCT_LIST_SUCCESS,
} from "../constant/ProductConst";
import Axios from "axios";
export const ListProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUSET,
  });

  try {
    const { data } = await Axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};
