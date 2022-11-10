import React from 'react';
import Astres from '../components/Astres';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Astres />
        </div>
    );
};

export default Home;