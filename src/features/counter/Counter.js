import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
	//counter is defined in store.js -> count(in state.counter.count) is the state in counterSlice.js
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	const [incrementAmount, setIncrementAmount] = useState(0);

	const addValue = Number(incrementAmount) || 0; //Making sure it is a number, otherwise it's 0

	const resetAll = () => {
		setIncrementAmount(0); // reset state for this component
		dispatch(reset()); // reset global state
	};

	return (
		<section>
			<p>{count}</p>
			<div>
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
			</div>

			<input
				type="text"
				value={incrementAmount}
				onChange={(e) => setIncrementAmount(e.target.value)}
			/>

			<div>
				<button onClick={() => dispatch(incrementByAmount(addValue))}>
					Add Amount
				</button>
				<button onClick={resetAll}>reset</button>
			</div>
		</section>
	);
};

export default Counter;
