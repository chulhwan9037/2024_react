import React, { useState } from 'react';

function Sample05(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirmed = () => {
        setIsConfirmed(!isConfirmed);
    }

    return(
        <div>
            <button 
                onClick={handleConfirmed}
                disabled={isConfirmed}
            >
                {isConfirmed?'확인':'미확인'}
            </button>
        </div>
    )
}
export default Sample05;