import React, { useState } from 'react';
import oo1 from '../img/oo1.png';
const Image = (props) => {

    const [mobile, Notmobile] = useState(true)
    return(
        <React.Fragment>
            <img src={oo1} alt=""/>
        </React.Fragment>
    )
}


export default Image;
