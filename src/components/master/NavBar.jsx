/* eslint-disable @next/next/no-img-element */
"use client";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

function NavScrollExample({ data }) {
  console.log(data);
  return (
    <div className="">
      <section id="topHeader" className=" d-none d-lg-block ">
        {data["socials"].map((social) => (
          <div key={social.id} className="row mx-5  my-3">
            {/* top left div  */}
            <div className="col-5 d-flex justify-content-start">
              <div className="fw-medium">
                <Link href={"/about"}>
                  <span className="px-4 top-left-span">About</span>
                </Link>
                <a href="">
                  <span className="px-4 top-left-span">FAQ</span>
                </a>
              </div>
              {/* social widget */}

              <div className="socialWidget ms-2">
                <a href={social["facebook"]}>
                  <span className="px-2">
                    <i className="bi bi-facebook" />
                  </span>
                </a>
                <a href={social["linkedin"]}>
                  <span className="px-2">
                    <i className="bi bi-github" />
                  </span>
                </a>
                <a href={social["twitter"]}>
                  <span className="px-2">
                    <i className="bi bi-twitter" />
                  </span>
                </a>
                <a href="#">
                  <span className="px-2">
                    <i className="bi bi-instagram" />
                  </span>
                </a>
              </div>
            </div>
            {/* top right div */}
            <div className="col-7 d-flex justify-content-end" id="topRight">
              <a href="#" className="px-2">
                <span>
                  <i className="bi bi-geo-alt-fill px-1" />
                  {social["address"]}
                </span>
              </a>
              <a href="mailto:ismailkhandokar0@gmail.com" className="px-2">
                <span>
                  <i className="bi bi-envelope-at-fill px-1" />
                  {social["about"]}
                </span>
              </a>
            </div>
          </div>
        ))}
      </section>
      <Navbar expand="lg" className="bg-body-tertiary py-md-4 px-sm-4 px-sm-4">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="/logo.png"
              alt=""
              className="img-fluid"
              style={{ maxWidth: "12rem" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex justify-content-center container-fluid"
              navbarScroll
            >
                <Link
                  href={"/"}
                  className="nav-link fs-5 fw-medium active nav-link-hover nav-item px-md-3"
                >
                  Home
                </Link>

                {data["categories"].map((menu) => (
                  <Link
                  key={menu.id}
                    href={`/category?id=${menu.id}`}
                    className="nav-link fs-5 fw-medium active nav-link-hover nav-item px-md-3"
                  >
                    {menu.name}
                  </Link>
                ))}
                
                 
              
            </Nav>
            <Form className="d-flex me-4">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
            <div className="d-flex">
              <Link
                href={"/login"}
                className="btn btn-primary fw-medium top-image-search-shadow me-3 text-white"
              >
                Login
              </Link>
              <Link
                href={"/signup"}
                className="btn btn-primary fw-medium top-image-search-shadow text-white"
              >
                Register
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
