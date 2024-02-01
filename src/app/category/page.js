/* eslint-disable @next/next/no-img-element */
import PlainLayout from '@/components/master/Plain_layout';
import React from 'react';
import LatestNews from '@/components/news/LatestNews';
import Link from 'next/link';

export const revalidate = 0; //second e count hoy



async function getData(id){
    let News = (await(await fetch(`${process.env.HOST}/api/news/category?catID=${id}`,{next:{revalidate:10}})).json())['data']
    let popular = (await (await fetch(`${process.env.HOST}/api/news/type?type=Featured`)).json())['data']
    return{
        News,
        popular
    }
}

const page = async ({searchParams}) => {
    let id = searchParams['id']
    let data = await getData(id)
    return (
        <PlainLayout>
            <section id="header" className="py-5 my-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            
            {
              data['News'].map(latest =>(
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
          <div className="col-12 col-lg-4">
          <div className="header-card">
              <h3 className="p-2 bg-primary rounded text-white ">
                Popular News
              </h3>
              {
                data['popular'].map(news =>(
                  <>
                  <Link href={`/details?id=${news['id']}`}>
                  <div key={news.id} className="card">
                    <div className="d-flex ">
                      <div className="rounded" style={{ width: "30rem" }}>
                        <img src={news["img4"]} alt="" className="img-fluid rounded" />
                      </div>
                      <div className="p-3">
                        <h4>{news['title']}</h4>
                        <p className="btn btn-danger rounded-pill px-2 py-0">
                          Type
                        </p>
                      </div>
                    </div>
                 </div>
                  </Link>
                 <br/>
                  </>
                ))
              }
              
            </div>
          </div>
        </div>
      </div>
    </section>
        </PlainLayout>
    );
};

export default page;