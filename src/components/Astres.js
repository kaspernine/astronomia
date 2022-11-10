import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Astres = () => {

    const [data, setData] = useState([])

    // Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
        axios.get("https://api.le-systeme-solaire.net/rest/bodies/").then((res) => setData(res.data.bodies))
    }, [])

    return (
        <div className='astres'>
            <h1>Astres</h1>
            <ul>
                {data.map((astre, index) => (
                    <Card key={index} astre={astre} />
                ))}
            </ul>
        </div>
    );
};

export default Astres;