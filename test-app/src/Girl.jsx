import { useState } from "react";

// import App from "./App";
function Lady({Lname, dish, img}){
    // console.log(Lname, dish, img);
    const [{myLname, setmyLname}] = useState(Lname);
    const changeHandler = () => {
        setmyLname('Selena')
    };
    return(
        <div>
            <h1>I love {myLname}</h1>
            <h2>who eats {dish}</h2>
            <img src={img} style={{width: 400,height:400}} />
            <button onClick={changeHandler}>Change Name </button>
            
        </div>

    );
}
// function Girl(){
//     return(
//         <div>
//             <h1>Hii what Are you<br></br>doing? </h1>
//             <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h1>
//             <h2> Dolores, beatae. Ipsa qui consectetur, beatae, a cumque accusamus dolor excepturi natus odio quo ea quisquam delectus numquam ad quas veniam vero.</h2>
//         </div>
//     )
// }


export default Lady;
// export default Girl;