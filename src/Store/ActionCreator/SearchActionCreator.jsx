import { SEARCH_ACTION_SAGA } from "../ActionTypes/SearchActionTypes";

export const searchAction = (data) => {
  // console.log(data)
  return {
    type: SEARCH_ACTION_SAGA,
    payload: data,
  };
};
