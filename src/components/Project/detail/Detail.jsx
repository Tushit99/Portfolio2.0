import { Collapse } from '@chakra-ui/react';
import React, { useState } from 'react'

const Detail = ({ text }) => {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);

    return (
        <div>
            <Collapse startingHeight={20} in={show}>
                {text}
            </Collapse>
            <button onClick={handleToggle} >
                Show {show ? "Less" : "More"}
            </button>
        </div>
    )
}

export default Detail

