import React from 'react';

const Card = ({ astre }) => {

    return (
        <li className="card">
            <img src="" alt={"planète " + astre.name} />
            <div className="infos">
                <h2>Nom du pays</h2>
            </div>
        </li>
    );
};

export default Card;