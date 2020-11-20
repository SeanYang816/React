import React from 'react';

//import component
import Tweet from './Tweet';

const Tweets = (props) => {

    const tweets = [
        {name: 'one', tweet: 'Man! i am so confused'},
        {name: 'two', tweet: 'Coding is easy but hard'},
        {name: 'three', tweet: 'You can do this man'},
        {name: 'four', tweet: 'Just push a little more'},
    ]
    return(
        <React.Fragment>
            {tweets.map((tweet) => (
                <Tweet name={tweet.name} tweet={tweet.tweet}/>
            ))}
        </React.Fragment>
    )

}


export default Tweets;
