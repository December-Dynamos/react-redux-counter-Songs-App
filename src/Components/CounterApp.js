import React, { useState } from "react"; 
// getstate 
// dispatch 
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, reset } from "../redux/actions/counterActions.js";


const CounterApp = () => {
       
     const count = useSelector((state) => state.counter)
    // console.log(count)

    const dispatch = useDispatch()




    return(
        <div>
              <h1> Counter App</h1>
                <h1> {count}</h1>
                <button onClick={()=>dispatch(increase())}> Increase </button>
                <button onClick={()=>dispatch(decrease())}> Decrease </button>
                <button onClick={()=>dispatch(reset())}> Reset </button>
        </div>
    )
}

export default CounterApp;