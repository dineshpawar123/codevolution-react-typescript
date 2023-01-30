import React,{useReducer} from 'react'

type CounterState = {
    count:number;
}

// type CounterAction = {
//     type:string;
//     payload:number
// }

// if payload is optional then issue for increment and decrement

// type CounterAction = {
//     type:'increment' | 'decrement' | 'reset';
//     payload?:number
// }

// if payload is optional then issue for increment and decrement

type updateAction = {
    type:'increment' | 'decrement';
    payload:number
}

type resetAction = {
    type:'reset';
}

type CounterAction = updateAction | resetAction;

const initialState={count:0}

const reducer = (state:CounterState,action:CounterAction)=>{

    switch(action.type){
        case 'increment':
            return {count:state.count+action.payload }
        case 'decrement':
            return {count:state.count-action.payload}
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function Counter() {

    const [state, dispatch] = useReducer(reducer, initialState)

        return (
            <div>
                <div>
                Counter : {state.count}
                </div>
                <div>
                    <button onClick={()=>{dispatch({type:'increment',payload:10})}}>increment 10</button>
                </div>
                <div>
                    <button onClick={()=>{dispatch({type:'decrement',payload:5})}}>decrement 5</button>
                </div>
                <div>
                    <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
                </div>
            </div>
        )
}

export default Counter;