import React from 'react'
import Header from "../components/Header";
import Outlook from "../components/Outlook";
import NewAdditions from "../components/NewAdditions";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';

const home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Outlook />
      <NewAdditions />
      <Featured />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default home