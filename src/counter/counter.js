import { useState } from "react";

function Counter () {
    const [counter, SetCounter] = useState(0);
    const decrease = () => {
        SetCounter(counter - 1);
    }
    const increase = () => {
        SetCounter(counter + 1);
    }
    const reset = () => {
        SetCounter(0);
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h2><button onClick={decrease} className="btn btn-primary btn-sm">-</button><span className="mx-5">Counter: {counter}</span><button onClick={increase} className="btn btn-primary btn-sm">+</button><button onClick={reset} className="btn  ms-5 btn-primary btn-sm">Reset</button></h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;