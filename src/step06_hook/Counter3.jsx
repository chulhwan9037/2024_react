import React, { useEffect, useState } from "react";

function Counter3(props) {

    const [count, setCount] = useState(0);
    // `` => 문자랑 자바스크립트 표현식을 같이 쓸 때 쓴다. 
    // 의존성 배열이 없으므로 갱신 될때마다 호출된다. 
    // [] 빈배열이면 처음한번 하고 다시 호출 안함.
    useEffect(()=>{
        document.title = `총 ${count} 번 클릭 했습니다.`;
    },[]);

    return(
        <div>
            <p> 총{count} 번 클릭했습니다.</p>
            <button onClick={()=>{
                
                setCount(count+1);
            }}>클릭</button>
        </div>
    )
}
export default Counter3;