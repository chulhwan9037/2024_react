import React, { useState } from 'react';

// 물 끓음 여부 알려주는 컴포넌트
function BoilingVerdict(props) {
    if(props.celsius >= 100){
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

function Calc(props) {
    const [temperature, setTemperature] = useState('');    
    
    const handleChange = (e) => {
        setTemperature(e.target.value);
    }

    return(
        <fieldset>
            <legend>섭씨 온도를 입력하세요 : </legend>
            <input 
                type='number'
                value={temperature}
                onChange={handleChange}
            />
            <BoilingVerdict celsius={temperature}/>
        </fieldset>
    )
}
export default Calc;