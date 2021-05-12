import React, { useState} from 'react';
import Image from './img/parental.png';
import Img1 from './ranImg/tenor.gif';
import Img2 from './ranImg/tenor(1).gif';
import Img3 from './ranImg/tenor(2).gif';
import Img4 from './ranImg/tenor(3).gif';

 const RandomJoke = () => {
    const [jokes, setJokes] = useState('');
    const [currentImg, setCurrentImg] =useState([Img1, Img2, Img3, Img4])

    const getJoke=()=>{

        const timer = setTimeout(()=>{
        fetch("http://api.icndb.com/jokes/random/")
          .then(res => res.json())
          .then((result) => {
            
            setJokes(result.value.joke)
            },
    
          )
          .catch((err) => {
            console.log(err)
          });},1500)

          
          setJokes('')
            

      }
 
   
        const randomNumber = Math.floor(Math.random() * currentImg.length);



      return (
          
        <div className="wrapper">
            <h1>Chuck Norris Jokes</h1>
            <div className="randomJ">
                <div className="text">
                    {jokes ==='' ? <img alt="logo" src={Image}/> : <p className="quote" data-testid="get-joke">{`${jokes}`}</p>}
                </div>
            </div>
            <button className="button" onClick={getJoke}>get joke!</button>
            
            {jokes === '' ? null : <img className="norrisPic" alt='gif' src={currentImg[randomNumber]}/>}
            

           

        </div>
    );
}



export default RandomJoke;


