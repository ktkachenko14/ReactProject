import React from "react";
import './App.css';
import Joke from './Joke'
import Navbar from './Navbar'

function App() {
    return(
        <div>
        <Navbar/>
        
        
            <Joke question="Hear about the new restaurant called Karma?" 
                    punchLine = "There’s no menu: You get what you deserve."/>
            <Joke question="Did you hear about the mathematician who's afraid of negative numbers?" 
                    punchLine = "He'll stop at nothing to avoid them. If you got a laugh from this, check out these other math jokes."/>
            <Joke question="What kind of exercise do lazy people do?" 
                    punchLine = "Diddly-squats."/>
            <Joke question="" 
                    punchLine = "Drinking too much espresso can cause a latte problems."/>
            <Joke question="" 
                    punchLine = "Instagram is just Twitter for people who go outside."/>
        </div>        
    );
}


export default App;