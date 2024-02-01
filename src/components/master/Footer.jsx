/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";


const Footer = ({ data }) => {
  return (
    <footer className="mt-5">
      <div className="container">
        <div className="footer">
          <div className="row">
            <div className="footer-one col-lg-4 col-sm-12 px-5 ">
              <img src="/logos.png" className="" alt="" />
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias harum, beatae perferendis fugiat quo quidem amet nobis
                explicabo corporis eos maxime accusamus illo quaerat, sed, modi
                enim nulla. Saepe, harum?
              </p>
              {data["socials"].map((social) => (
                <div key={social.id} className="footer-one-social d-flex ">
                  <a href={social['linkedin']}><i className="bi bi-github" /></a>
                  <a href={social['facebook']}> <i className="bi bi-facebook" /></a>
                  <a href={social['twitter']}><i className="bi bi-instagram" /></a>
                  <a href={social['youtube']}><i className="bi bi-linkedin" /></a>
                  
                  
                 
                </div>
              ))}
            </div>
            <div className="footer-two col-lg-4 col-sm-12 d-none d-lg-block">
              <h4 className="fw-bold mb-3">Contacts</h4>
              <p>
                <span>Address: </span>Poranthana kishorgonj-sadar,Kishorgonj
              </p>
              <p>
                <span>Email: </span>ismailkhandokar0@gmail.com
              </p>
              <p>
                <span>Phone: </span>+88016-2490-4141
              </p>
              <p>
                <span>Open: </span> Mon 8:00 am – 18:00 pm
              </p>
            </div>
            <div className="footer-three col-lg-4 col-sm-12 d-none d-lg-block">
              <h4 className="fw-bold mb-3">Categories</h4>
              <ul>
                {data["categories"].map((menu) => (
                  <li key={menu.id} className="mb-3">
                    <Link href={`/category?id=${menu.id}`}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copy mt-5 py-3 text-center border-top">
        <p>@All right reserved by ISMAIL</p>
      </div>
    </footer>
  );
};

export default Footer;
