import React from 'react';
import ContactUS from '../../Shared/ContactUS/ContactUS';
import Footer from '../../Shared/Footer/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import OurBlogs from '../OurBlog/OurBlogs/OurBlogs';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <DentalCare />
            <AppointmentBanner />
            <Testimonials />
            <OurBlogs />
            <ContactUS />
            <Footer />
        </div>
    );
};

export default Home;