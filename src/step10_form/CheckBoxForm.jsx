import React,{ useState } from 'react';

function CheckBoxForm(props) {
    const [selectedFruits, setSelectedFruits] = useState([]);
    
  
    const handleChange = (e) => {
        const {value, checked} = e.target;
        // 체크된 경우에는 선택된 과일을 selectedFruits 추가, 아닌 경우는 제거
        // ...selectedFruits => selectedFruits 복사본 하나 만든다.
        if(checked){
            setSelectedFruits([...selectedFruits, value]);
        }else{
            // selectedFruits 배열에서 하나씩 꺼낸 k가 value와 같지 않은 경우 걸러 내겠다. 
            // selectedFruits.filter(k => k !== value) 일치하지 않는 것들의 모임
            setSelectedFruits(selectedFruits.filter(k => k !== value));
        }
    }
    
  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("선택한 과일들 : " , selectedFruits);
    }


    return(
        <form onSubmit={handleSubmit}>
           <label>
                 {/* selectedFruits 배열아네 apple 있으면 true, 없으면 false */} 
                <input type="checkbox" value="apple" checked={selectedFruits.includes("apple")} 
                onChange={handleChange}
                /> 사과
           </label>
                <br/>                
           <label>
                <input type="checkbox" value="banana" checked={selectedFruits.includes("banana")} 
                onChange={handleChange}
                /> 바나나
           </label>
                <br/>                
           <label>
                <input type="checkbox" value="grape" checked={selectedFruits.includes("grape")} 
                onChange={handleChange}
                /> 포도
           </label>
                <br/>                
           <label>
                <input type="checkbox" value="mango" checked={selectedFruits.includes("mango")} 
                onChange={handleChange}
                /> 망고
           </label>
                <br/>                
           
            <button type='submit'>보내기</button>
        </form>
    )
}
export default CheckBoxForm;













