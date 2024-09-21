import { useState } from "react";

const Counter =({ count }) => {
    let [number, setnumber] = useState(count);
    console.log("number", number);

    const onclickHandler = () => {
        // console.log("Before", number);
        // number++;
        // console.log("After", number);
        let newNumber = number++;
        setnumber(newNumber);//setnumber renders or dynamically change as needed
    };
    return (
        <div>
            <h1>Counter - :{number}</h1>
            <button onClick={onclickHandler}>Click Me !!!</button>
        </div>
    );
};

export default Counter;

// const Counter = ({count}) => {
//     return (
//         <div>
//             <h1>Counter : {count}</h1>
//             <button>Click me!!!</button>
//         </div>
//     );
// };
// export default Counter;