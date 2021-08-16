import {CART_ADD_ITEM} from '../constant/CartConstant'
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
      }
    default: return state
}
}