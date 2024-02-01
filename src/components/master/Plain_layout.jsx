import React, { cache } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

export const revalidate = 0; //second e count hoy

async function getData(){
    let socials = ( await (await fetch(`${process.env.HOST}/api/social`,{next:{revalidate:10}})).json())['data']
    let categories = (await (await fetch(`http://localhost:3000/api/category`, { next: { revalidate: 10 } })).json())['data']
    return {
        socials:socials,
        categories:categories 
    }
}



const Plain_layout =  async({children}) => {
    const data = await getData()
    return (
        <div>
           <NavBar data={data}/>
           <Toaster position="top-center" />
           {children}
           <Footer data={data}/>
        </div>
    );
};

export default Plain_layout;