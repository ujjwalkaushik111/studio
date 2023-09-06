import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'slick-carousel/slick/slick.css' 
import 'slick-carousel/slick/slick-theme.css' 
import Navbar from './components/Navbar';
import Featured from './components/Featured';
import VipeStudio from './components/VipeStudio';
import LongTrem from './components/LongTrem';
import Succes from './components/Succes';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Topbutton from './components/Topbutton';


function App() {
   // preloader-start
   const [loading, setLoading] =useState(true);
   // Aos-start
    
     useEffect (() => {
     Aos.init({once:true,});
     // Aos-end
    setTimeout(() => {
     setLoading(false);
     document.body.classList.remove("overflow-hidden")
   }, 3000)
   document.body.classList.add("overflow-hidden")
    }, [])
 
   //  preloader-end
  return (
  <>
  {loading && <Preloader/>}
   <Navbar/>
   <Featured/>
   <VipeStudio/>
   <LongTrem/>
   <Succes/>
   <Topbutton/>
  </>
  );
}

export default App;
