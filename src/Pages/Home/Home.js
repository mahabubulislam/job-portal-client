import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import HowItWork from './HowItWork';
import Footer from '../Shared/Footer/Footer'
const Home = () => {
    return (
        <main>
            <Banner/>
            <Categories/>
            <HowItWork/>
            <Footer/>
        </main>
    );
};

export default Home;