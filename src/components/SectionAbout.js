import React from "react";
// import about1 from "../images/about1.png";

const SectionAbout = () => {
  return (
    <section className="section-about row">
      <div className="col-sm">
        <div className="section-about">
          <div className="section-about__background">
            <div className="section-about__background-top">
              <div className=" section-about__background-top-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm">
        <div className="section-about">
          <div className="section-about__background">
            <div className="section-about__background-top section-about__background-top-2"></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="col-sm">
        <div className="section-about">
          <div className="section-about__background">
            <div className="section-about__background-top section-about__background-top-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
