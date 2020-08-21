import React from "react";

// const u1 = () => <div className="incidence-section-inner-illustrations-card-top-title-u1"></div>;
// const u2 = () => <div className="incidence-section-inner-illustrations-card-top-title-u2"></div>;
// const u3 = () => <div className="incidence-section-inner-illustrations-card-top-title-u3"></div>;

const Incidencesectioncard = ({ photo, title, underline }) => {
  return (
    <div className="incidence-section-inner-illustrations-card">
      <div className="incidence-section-inner-illustrations-card-top">
        <img
          className="incidence-section-inner-illustrations-card-top-image"
          src={photo}
          alt="faya"
        />
      </div>
      <div className="incidence-section-inner-illustrations-card-top-title">
        {title}
        {/* {underline} */}
        <div className="incidence-section-inner-illustrations-card-top-title-u1"></div>
      </div>
      <div className="incidence-section-inner-illustrations-card-text">
        Lorem in qui minim culpa veniam sint aliquip amet non laboris. Id
        reprehenderit qui ad aute exercitation veniam reprehenderit consequat
        dolore labore proident reprehenderit ex. Aliqua non eu duis magna ut
        duis. Consequat deserunt consectetur reprehenderit cillum nulla elit
        reprehenderit ullamco amet aliquip.
      </div>
    </div>
  );
};

export default Incidencesectioncard;
