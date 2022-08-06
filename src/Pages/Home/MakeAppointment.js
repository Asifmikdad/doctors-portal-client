import React from "react";
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import MainButton from "../Shared/MainButton";

const MakeAppointment = () => {
    return(
        <section style={{
            background: `url(${appointment})`
        }} 
        className="flex justify-center items-center">
                <div className="flex-1">
                    <img className="mt-[-160px]" src= {doctor} alt=""/>
                </div>
                <div className="flex-1">
                <h3 className="text-xl text-white font-bold"> Appointment </h3>
                <h2 className="text-3xl text-accent">Make an Appointment Today</h2>
                <p className="text-white">
                Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader, it's seen as gibberish
                </p>
                <MainButton>Get Started</MainButton>
                </div>
        </section>
    );
};
export default MakeAppointment;