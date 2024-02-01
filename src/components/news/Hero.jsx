/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";

function Hero({ data }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  console.log(data);

  return (
    <section id="header" className="py-5 my-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <Carousel
              data-bs-theme="dark"
              activeIndex={index}
              onSelect={handleSelect}
            >
              {data["sliders"].map((slide) => (
                <Carousel.Item key={slide.id}>
                  <Link href={`/details?id=${slide['id']}`}>
                    <img
                      className="d-block w-100"
                      src={slide["img1"]}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h5>{slide['title']}</h5>
                      <p>
                        {slide["short_des"]}
                      </p>
                    </Carousel.Caption>
                  </Link>
                </Carousel.Item>
              ))}
            </Carousel>
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
  );
}

export default Hero;
