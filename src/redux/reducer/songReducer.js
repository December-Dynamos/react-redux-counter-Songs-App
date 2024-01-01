import { SELECTED_SONG } from "../actions/actionTypes";
import {RESET} from "../actions/actionTypes";

 
const initialState = null 

const songReducer = (state = initialState, action) => {
      
      console.log("songReducer is executed")


      if(action.type === SELECTED_SONG){
            return action.payload
      }
      else if(action.type === RESET){
            return null
      }
     
      return state
}

export default songReducer


// songReducer(initialState, {type: SELECTED_SONG, payload: {title: 'song1', duration: '4:05'}})