import PlainLayout from '@/components/master/Plain_layout';
import Hero from '@/components/news/Hero';
import LatestNews from '@/components/news/LatestNews';
import Subscribe from '@/components/news/Subscribe';
import React from 'react';
import { revalidate } from './../components/master/Plain_layout';



async function getData(){
  let sliders = (await (await fetch(`${process.env.HOST}/api/news/type?type=Slider`)).json())['data']
  let popular = (await (await fetch(`${process.env.HOST}/api/news/type?type=Featured`,{next:{revalidate:10}})).json())['data']
  let latest = (await (await fetch(`${process.env.HOST}/api/news/latest`,{next:{revalidate:10}})).json())['data']
  return {
    sliders,popular,latest
  }

}

const page = async () => {
  const data = await getData()
  return (
    <PlainLayout>
      <Hero data={data} />
      <LatestNews data={data['latest']}/>
      <Subscribe/>
    </PlainLayout>
  );
};

export default page;