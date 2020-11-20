import React from 'react';


const Tweet = (props) => {
    return(
        <React.Fragment>

        <h2>{props.name}</h2>
        <p>{props.tweet}</p>

        </React.Fragment>
    )
}


export default Tweet;
