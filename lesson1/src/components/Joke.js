import React from 'react';
import './Joke.css';

function Joke(props){
    return (
        <div className="card">
            <div className="question" style={{display: props.question === undefined ? 'none': 'block'}}>{props.question}</div>
            <div>{props.punchLine}</div>
            <div className="likeIcon"><img src="https://img.icons8.com/plasticine/42/000000/likes-folder.png"/></div>
            
        </div>
        
    );
}

export default Joke;