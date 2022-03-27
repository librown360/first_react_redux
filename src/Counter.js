import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount } from "./features/counterSlice"

const Counter = () => {
    // Call useSelector to grab the current value of our state variable
    // from the store and assign it to a variable named 'count'
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [ input, setInput ] = useState(0)

    const byAmountSubmit = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
        document.getElementById('num').value = ''
    }

    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <form onSubmit={(e) => byAmountSubmit(e)}>
                <input id='num' type='number' onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Counter