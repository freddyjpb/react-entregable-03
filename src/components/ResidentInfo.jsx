import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ResidentInfo.css';

const ResidentInfo = ({ url }) => {
    const [resident, setResident] = useState();

    useEffect(() => {
        axios.get(url)
            .then(res => setResident(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="card">
            <article>
                <header>
                    <img src={resident?.image} alt="" />
                    <div>
                        <span></span>
                        <span>{resident?.status}</span>
                    </div>
                </header>
                <section>
                    <h3>{resident?.name}</h3>
                    <ul>
                        <li><span>Species</span><span>{resident?.species}</span></li>
                        <li><span>Origin</span><span>{resident?.origin.name}</span></li>
                        <li><span>Episodes where appear</span><span>{resident?.episode.length}</span></li>
                    </ul>
                </section>
            </article>
        </div>
    )
}

export default ResidentInfo;