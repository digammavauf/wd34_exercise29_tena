import React from 'react';
import ReactDOM from 'react-dom/client';
/* import './css/index.css'; */
/* import App from './components/App'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fec107" fillOpacity="1" d="M0,128L80,160C160,192,320,256,480,240C640,224,800,128,960,112C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <Catalog />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fec107" fillOpacity="1" d="M0,128L80,160C160,192,320,256,480,240C640,224,800,128,960,112C1120,96,1280,160,1360,192L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
