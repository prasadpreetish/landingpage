import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './utils.css';
import Navbar from './components/Navbar';
import Float from './components/Float';
import Heroone from './components/Heroone';
import Herotwo from './components/Herotwo';
import Feature from './components/Feature';
import Twocardfeature from './components/Twocardfeature';
import Gallery from './components/Gallery';
import Adv from './components/Adv'
import Fourmore from './components/Fourmore';
import Flipthree from './components/Flipthree';
import Knowus from './components/Knowus';
import Abtcompany from './components/Abtcompany';
import Threeiccontent from './components/Threeiccontent';
import Secondadv from './components/Secondadv';
import Stats from './components/Stats';
import Embyt from './components/Embyt';
import Compscr from './components/Compscr';
import Feedback from './components/Feedback';
import Blog from './components/Blog';
import Footerlabel from './components/Footerlabel';
import Footer from './components/Footer';
ReactDOM.render(
  <>
  <Float/>
  <Heroone/>
  {/* <Navbar/> */}
  <Herotwo/>
  <Feature/>
  <Twocardfeature/>
  <Gallery/>
  <Adv/>
  <Fourmore/>
  <Flipthree/>
  <Knowus/>
  <Abtcompany/>
  <Threeiccontent/>
  <Secondadv/>
  <Stats/>
  <Embyt/>
  <Compscr/>
  <Feedback/>
  <Blog/>
  <Footerlabel/>
  <Footer/>
  </>,
  document.getElementById("root")
);