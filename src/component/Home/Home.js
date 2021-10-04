import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import History from '../History/History';
import HomeDisplay from '../HomeDisplay/HomeDisplay';
import "./Home.css"
const Home = () => {
    const [histories, setHistories]=useState([]);

    useEffect(()=>{
        fetch('./home.json')
        .then(res=> res.json())
        .then(data=> setHistories(data))
    }, [])

    return (
        <div className='global'>
                <section >
                <div className='home container '>

                     {
                         histories.map(history => <HomeDisplay
                         key={history.id}
                         history={history}
                         ></HomeDisplay>
                         )
                     }
                     </div>
                </section>
                <section className='container text-center mt-4 mb-10'>
                    <p><h2 className='text-5xl'>to learn more capter of islamic history <NavLink to='/services' className='text-black'>click here</NavLink></h2></p>
                </section>
        </div>
    );
};

export default Home;