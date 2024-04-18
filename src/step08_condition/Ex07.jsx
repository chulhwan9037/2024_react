import React, { useState } from 'react';
import Ex07_Sub from './Ex07_Sub';

function Ex07(props) {
    
    const [showWaning, setShowWaning] = useState(false);

    const handleToggleClick = () => {
        setShowWaning(!showWaning);
    }

    return(
        <div>
            <Ex07_Sub warning={showWaning}/>
            <button onClick={handleToggleClick}>{showWaning ? '감추기' : '보이기'}</button>
        </div>
    )
}
export default Ex07;