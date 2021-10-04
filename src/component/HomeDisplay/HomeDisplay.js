import React from 'react';
import './HomeDisplay.css'
const HomeDisplay = (props) => {
    console.log(props.history);
    const {ageOf, founder, duration,ruled,img, discription}=props.history
    return (
              <div className='single-history text-center'>
                <img src={img} alt="" className="center"/>
                <h3>Age of: {ageOf}</h3>
                <h4>Started With: {founder}</h4>
                <h5>Ruled Durration: {duration} </h5>
                <p>Ruled Areas: {ruled}</p>
                <a href={discription}><button>to know more</button></a>
              </div>
    );
};

export default HomeDisplay;