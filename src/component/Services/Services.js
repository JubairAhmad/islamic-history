import React, { useEffect, useState } from 'react';
import History from '../History/History';

const Services = () => {

    const [histories, setHistories]=useState([]);

    useEffect(()=>{
        fetch('./islamicHistory.json')
        .then(res=> res.json())
        .then(data=> setHistories(data))
    }, [])

    return (
        <div >
                 <div className='home container '>

                {
                    histories.map(history => <History
                    key={history.id}
                    history={history}
                    ></History>
                    )
                }
                </div>
        </div>
    );
};export default Services;