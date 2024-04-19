import React,{ useState } from 'react';

function RadioButton(props) {
    const [selectedFruits, setSelectedFruits] = useState('');
    
  
    const handleChange = (e) => {
       setSelectedFruits(e.target.value);
    }
    
  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("선택한 과일들 : " , selectedFruits);
    }


    return(
        <form onSubmit={handleSubmit}>
           <label>
                <input type="radio" value="apple" checked={selectedFruits === "apple"} 
                onChange={handleChange}
                /> 사과
           </label>
                <br/>                
           <label>
                <input type="radio" value="banana" checked={selectedFruits === "banana"} 
                onChange={handleChange}
                /> 바나나
           </label>
                <br/>                
           <label>
                <input type="radio" value="grape" checked={selectedFruits === "grape"} 
                onChange={handleChange}
                /> 포도
           </label>
                <br/>                
           <label>
                <input type="radio" value="mango" checked={selectedFruits === "mango"} 
                onChange={handleChange}
                /> 망고
           </label>
                <br/>                
           
            <button type='submit'>보내기</button>
        </form>
    )
}
export default RadioButton;













