import React from "react";
import logo1 from "../images/logo1.png";
import header1 from "../images/header1.png";
import header2 from "../images/header2.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-box">
          <img className="logo" src={logo1} alt="logo" />
        </div>
        <div className="login-box">
          <button type="button" className="btn btn-login">
            login
          </button>
          <button type="button" className="btn btn-emergency">
            emergency
          </button>
        </div>
      </div>
      <div className="header-slider">
        <div
          id="headerCarouselCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#headerCarouselCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#headerCarouselCaptions" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={header1}
                class="d-block w-100 carousel-item-image"
                alt="main header one"
              />
              <div class=" d-none d-md-block">
                <div className="header-caption">
                  <h1 className="header-caption__main">
                    You can be someone’s H<span className="e">E</span>RO with
                    just a R<span className="e">E</span>PORT
                  </h1>
                  <p className="header-caption__sub">
                    click <span className="e">Emergency</span> if it's an
                    immediate report
                  </p>
                  <button type="button" className="btn header-button">
                    create report
                  </button>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={header2}
                class="d-block w-100  carousel-item-image"
                alt="main header one"
              />
              <div class="d-none d-md-block">
                <div className="header-caption">
                  <h1 className="header-caption__main">
                    Save a lot with our R<span className="e">E</span>PORT system
                  </h1>
                  <p className="header-caption__sub">
                    click <span className="e">Emergency</span> if it's an
                    immediate report
                  </p>
                  <button type="button" className="btn header-button">
                    {" "}
                    create report
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#headerCarouselCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#headerCarouselCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
