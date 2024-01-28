import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Plain_layout = ({children}) => {
    return (
        <div>
           <NavBar/>
           {children}
           <Footer/>
        </div>
    );
};

export default Plain_layout;