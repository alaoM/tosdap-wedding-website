import Link from "next/link";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <>
      {/* start of hero */}
      <section className="hero">
        <div className="hero-slider hero-slider-s1">
          <div className="slide-item">
            <Image height={500} width={500} src="/images/prewedding/8.png" alt="hero" className="slider-bg" />
          </div>
          <div className="slide-item">
            <Image height={500} width={500} src="/images/prewedding/9.png" alt="hero" className="slider-bg" />
          </div>
        </div>
        <div className="wedding-announcement">
          <div className="couple-name-merried-text">
            <h2 className="wow slideInUp" data-wow-duration="1s">
              Oluwatosin &amp; Oludapo
            </h2>
            <div className="married-text wow fadeIn" data-wow-delay="1s">
              <h4>
                <span className=" wow fadeInUp" data-wow-delay="1.05s">
                  W
                </span>
                <span className=" wow fadeInUp" data-wow-delay="1.10s">
                  e
                </span>
                <span className=" wow fadeInUp" data-wow-delay="1.15s">
                &apos;
                </span>
                <span className=" wow fadeInUp" data-wow-delay="1.20s">
                  r
                </span>
                <span className=" wow fadeInUp" data-wow-delay="1.25s">
                  e
                </span>
                <span>&nbsp;</span>
                <span className=" wow fadeInUp" data-wow-delay="1.30s">
                  g
                </span>
                <span className=" wow fadeInUp" data-wow-delay="1.35s">
                  e
                </span>
                <span className=" wow fadeInUp" data-wow-delay="1.40s">
                  t
                </span>
                <span className=" wow fadeInUp" data-wow-delay="1.45s">
                  t
                </span>
                <span className=" wow fadeInUp" data-wow-delay="1.50s">
                  i
                </span>
                <span className=" wow fadeInUp" data-wow-delay="1.55s">
                  n
                </span>
                <span className=" wow fadeInUp" data-wow-delay="1.60s">
                  g
                </span>
                <span>&nbsp;</span>
                <span className=" wow fadeInUp" data-wow-delay="1.65s">
                  m
                </span>
                <span className=" wow fadeInUp" data-wow-delay="1.70s">
                  a
                </span>
                <span className=" wow fadeInUp" data-wow-delay="1.75s">
                  r
                </span>
                <span className=" wow fadeInUp" data-wow-delay="1.80s">
                  r
                </span>
                <span className=" wow fadeInUp" data-wow-delay="1.85s">
                  i
                </span>
                <span className=" wow fadeInUp" data-wow-delay="1.90s">
                  e
                </span>
                <span className=" wow fadeInUp" data-wow-delay="1.95s">
                  d
                </span>
              </h4>
            </div>
            {/* <i class="fa fa-heart"></i> */}
          </div>
          <div className="save-the-date">
            <h4>Save the date</h4>
            <span className="date">08 JULY 2023</span>
          </div>
        </div>
      </section>
      {/* end of hero slider */}
      {/* Start header */}
      <header id="myHeader" className="site-header header-style-1">
        {/* Navigation*/}
        <nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
          <div className="container">
            <Link className="navbar-brand" href="#page-top">
              ❤️TOSDAP
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" aria-hidden="true" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" href="#home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#couple">
                    Couple
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#story">
                    Story
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#venue">
                    Venue
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#gallery">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#rsvp">
                    RSVP
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* end of header */}
    </>
  );
}

export default Navbar;
