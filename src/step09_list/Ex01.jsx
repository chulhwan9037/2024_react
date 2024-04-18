import React from 'react';

function Ex01(props) {
    const {list} = props;

    const listItems = list.map((k)=>{
        return(
            // 개발자 도구를 보면 key 때문에 오류 발생
            // <li>{k}</li>
            
            // 키에 들어가는 값은 중복 안되는 것으로 넣어주어야 한다. 
            <li key={k}>{k}</li>
        )
    });

    return(
        <ul>{listItems}</ul>
    )
    /* 
    const listItems2 = list.map((k, index)=>{
        return(
            <li key={index}>{k}</li>
        )
    });

    return(
        <ul>{listItems2}</ul>
    ) */
}
export default Ex01;