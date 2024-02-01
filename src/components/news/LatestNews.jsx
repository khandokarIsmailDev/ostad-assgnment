/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import React from 'react';

const LatestNews = ({data}) => {
    return (
      <section className="py-5 my-5">
      <div className="container">
        <div className="d-flex justify-content-center text-primary my-5">
          <h2 className="">Latest News</h2>
        </div>
        <div className="">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            
            {
              data.map(latest =>(
                <div key={latest['id']} className="col">
              <div className="card">
                <img
                  src={latest['img3']}
                  className="card-img-top"
                  alt="Hollywood Sign on The Hill"
                />
                <div className="card-body">
                  <h5 className="card-title">{latest['title']}</h5>
                  <p className="card-text">
                    {latest['short_des']}
                  </p>
                  <Link href={`/details?id=${latest['id']}`} className="btn btn-primary" >Read More</Link>
                </div>
              </div>
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
    

    );
};

export default LatestNews;