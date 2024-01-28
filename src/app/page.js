import PlainLayout from '@/components/master/Plain_layout';
import Hero from '@/components/news/Hero';
import LatestNews from '@/components/news/LatestNews';
import Subscribe from '@/components/news/Subscribe';
import React from 'react';

const page = () => {
  return (
    <PlainLayout>
      <Hero/>
      <LatestNews/>
      <Subscribe/>
    </PlainLayout>
  );
};

export default page;