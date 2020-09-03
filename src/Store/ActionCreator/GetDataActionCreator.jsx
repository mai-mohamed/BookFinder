import {SEARCH_ACTION} from "../ActionTypes/SearchActionTypes";

export const getData=(data)=>{
   console.log(data)
    return{
        type:SEARCH_ACTION,
        payload:data
    }
}