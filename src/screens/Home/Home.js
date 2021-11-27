import React from 'react';
//import components
import Navbar from 'components/navBar/navbar';
import Card from 'components/card/card';
import FilterBar from 'components/filterBar/FilterBar';
//css
import './Home.css'
//context
import { AppWrapper } from 'context/context';

const Home = () => {
    return (
        <AppWrapper>
        <div style={{ margin: '20px'}}>
            <div className='nav-container'>
                <Navbar/>
                <FilterBar/>
            </div>
            <Card/>
        </div>
        </AppWrapper>
    );
};

export default Home;