import React, { useState } from "react";

function Counter(props) {
    //let count = 0 ;

    //const [변수명, set변수명(첫글자는 대문자)] = useState(초기값);
    const [count, setCount] = useState(0);

    return(
        <div>
            <p> 총{count} 번 클릭했습니다.</p>
            <button onClick={()=>{
                //count++; 
                //console.log("count", count)
                
                setCount(count+1);
            }}>클릭</button>
        </div>
    )
}
export default Counter;