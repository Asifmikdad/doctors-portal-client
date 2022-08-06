import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';
import Treatment from './Treatment';


export const Home = () => {
  return (
    <div className='px-12'>
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <Treatment></Treatment>
        <MakeAppointment></MakeAppointment>
        <Testimonials></Testimonials>
    </div>
  );
};
