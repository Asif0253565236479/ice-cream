import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constant/CartConstant'
export const cartReduaser = (state = {CartItem : []} , action) =>{ 
switch(action.type){ 
    case CART_ADD_ITEM:
      const item = action.payload;
      const exsistItem = state.CartItem.find( (x) => x.product === item.product);
      if(exsistItem){
          return{
              ...state , CartItem: state.CartItem.map( (x)=> x.product === exsistItem.product ? item : x )
           };
          
      }
      else{
          return{
              ...state , CartItem:[...state.CartItem , item]
          }
      };

      case CART_REMOVE_ITEM:
        return {
          ...state,
          CartItem: state.CartItem.filter((x) => x.product !== action.payload),
        };

     
    default: return state
}
}