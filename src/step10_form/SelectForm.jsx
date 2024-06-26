import React, { useState } from 'react';

function SelectForm(props) {
    const [fruit_name, setFruit_name] = useState('grape');
    
  
    const handleChange = (e) => {
        setFruit_name(e.target.value);
    }
    
  

    const handleSubmit = (e) => {
        alert('입력한 이름 : ' + fruit_name);
        e.preventDefault();
    }


    return(
        <form onSubmit={handleSubmit}>
           <label>
                과일을 선택하세요 : 
                <select value={fruit_name} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="grape">포도</option>
                    <option value="strawberry">딸기</option>
                    <option value="watermelon">수박</option>
                </select>
           </label>
           <hr />
           
            <button type='submit'>보내기</button>
        </form>
    )
}
export default SelectForm;