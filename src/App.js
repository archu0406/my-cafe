import React from 'react'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';


// Import images
import img1 from './img/1.jpg'
import img2 from './img/3.jpg'
import img3 from './img/2.jpg'
import img4 from './img/5.jpg'
import banimg from './img/banner.jpg'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Menu bgImg1={img1} bgImg2={img2} />
      <Menu bgImg1={img3} bgImg2={img4} />
      <Footer />
    </>
  );
}

export default App;