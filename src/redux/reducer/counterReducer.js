import { INCREASE, DECREASE, RESET } from "../actions/actionTypes.js";


// const count = 0
const intialState = 0


// counterReducer()
// counterReducer(0, {type: "INCREASE"} )
// counterReducer(1, {type: "INCREASE"} )

// counterReducer(2, {type: "INCREASE", value: 100})




function counterReducer(state=intialState, action){

    switch(action.type){

        case INCREASE:  return state + action.value

        case DECREASE:  return state - 1

        case RESET:  return intialState

        default:  return state

    }

}

export default counterReducer




// counerReducer(100 , {type: "INCREASE"})
// counerReducer(100 , {type: "DECREASE"})
// counerReducer(100 , {type: "RESET"})

// counerReducer(100 )