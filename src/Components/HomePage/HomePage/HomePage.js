import React from 'react';
import Blogs from '../Blogs/Blogs';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeProjects from '../HomeProjects/HomeProjects';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <HomeProjects></HomeProjects>
            <Blogs></Blogs>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;