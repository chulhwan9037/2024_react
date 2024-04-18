import React from 'react';

// 단축평가 : 조건1 && 조건2 일 때 조건 1이 false 이면 조건2는 하지 않는다. 
function Ex04(props) {
    const msg = props.msg;
    
    return(
        <div>
            <h1>안녕하세요.</h1>
            {msg.length > 0 && 
                <h2>현재 {msg.length}개의 읽지 않은 메세지가 있습니다.</h2>
            } 
        </div>
    )
}
export default Ex04;