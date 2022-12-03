import React, { useState } from 'react'
import axios from 'axios';
import style from './style.css';

 function Joke() {
    const [joke, setJoke]=useState("");
    const Generatejoke=()=>{
        axios.get('https://api.chucknorris.io/jokes/random')
        .then((resp)=>setJoke(resp.data.value))
        .catch((e)=>console.log(e))
    };
  return (
    <div className="container">
        <div className='joke'>{joke}</div>
        <button onClick={Generatejoke}>Generate </button>
    </div>
  )
}
export default Joke;