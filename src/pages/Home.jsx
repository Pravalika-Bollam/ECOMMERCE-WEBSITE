
import React from 'react';
import { Announcement } from './components/Announcement';
import { Categoryitem } from './components/Categoryitem';
import Navbar from "./components/Navbar";
import { Slider } from './components/Slider';
import { Products } from './components/Products';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

const Home = () => {
  return (
    <>
    <Announcement />
    <Navbar />
    <Slider />
    <Categoryitem />
    <Products />
    <Newsletter />
    <Footer />
    </>
    
  )
};

export default Home;


