
import {  SEARCH_ACTION} from "../ActionTypes/SearchActionTypes";
export const BookReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_ACTION:
    //  return  console.log("plaa")
      return { ...state, books: action.payload };
    default:
      return state;
  }
};



