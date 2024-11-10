import React from 'react';
import Header from '../app/component/header';
import Hero from '../app/component/hero';
import Gallery from '../app/component/gallery';
import About from './component/About';
import Footer from '../app/component/footer';
import Contact from './component/contact';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Gallery /> 
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
