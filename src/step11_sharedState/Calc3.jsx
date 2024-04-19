import React, { useState } from 'react';

const scaleName = {
    c : '섭씨',
    f : '화씨'
}

function BoilingVerdict(props) {
    if(props.celsius >= 100){
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}


function TemperatureInput(props) {
    
    const handleChange = (e) => {
        props.onTemperatureChange(e.target.value);
    }



    return(
        <fieldset>
            <legend>온도를 입력하세요.(단위 :{scaleName[props.scale]}) : </legend>
            <input 
                type='number'
                value={props.temperature}
                onChange={handleChange}
            />
            
        </fieldset>
    )
}
function toCelsius(fahrenheit) {
    return ((fahrenheit-32)*5)/9;
}
function toFahrenheit(toCelsius) {
    return (toCelsius*9)/5 + 32 ;
}
function tryConvert(temperature, convert) {
    return Math.round(convert(temperature)*10)/10;
}

function Calc3(props) {
    const [temperature, setTemperature] = useState('');  
    const [scale, setScale] = useState('');

    const handleCelsiusChange = (temperature) =>{
        setTemperature(temperature);
        setScale("c");
    }
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }

    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature ;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature ;

    return(
        <div>
            <TemperatureInput scale="c" temperature = {celsius} onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput scale="f" temperature = {fahrenheit} onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict celsius={celsius}/>
        </div>
    )
}

export default Calc3;