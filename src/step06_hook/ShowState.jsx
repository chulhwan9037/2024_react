import React, { useMemo } from "react";

const getNumber = (number) => {
    console.log("숫자가 변동 되었습니다.");
    return number;
};

const getText = (text) =>{
    console.log("문자가 변동 되었습니다.");
    return text;
};

const ShowState = ({number, text}) => {
    // useMemo() 사용 안할 때
    //const showNumber = getNumber(number); 
    //const showText = getText(text);

    // 값이 변동되는 것만 반응한다. 
    // 값이 변동되지 않으면 기존값 그대로 렌더링
    const showNumber = useMemo(()=>getNumber(number), [number]); 
    const showText = useMemo(()=>getText(text), [text]);
    return(
        <div>
            {showNumber}<br/>
            {showText}
        </div>
    )
};
export default ShowState;


