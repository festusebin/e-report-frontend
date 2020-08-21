import React from "react";
// import { useWindowScroll } from "react-use";
import fire from ".././images/fire.png";
import rape from ".././images/rape.png";
import accident from ".././images/accident.png";
import IncidenceSectionCard from "./IncidenceSectionCard";

const u1 = () => <div></div>;
// const u2 = () => <div className="incidence-section-inner-illustrations-card-top-title-u2"></div>;
// const u3 = () => <div className="incidence-section-inner-illustrations-card-top-title-u3"></div>;
const IncidenceSection = ({ photo }) => {
  return (
    <div className="container incidence-section">
      <div className="incidence-section-inner">
        <h2 className="report-section-top__heading">List of Incidence</h2>
        <div className="bottom-outline"></div>

        <div className="incidence-section-inner-description">
          Irure veniam duis eiusmod consectetur ea nulla. Exercitation laboris
          culpa sit ipsum officia deserunt sit reprehenderit. Nisi velit magna
          enim consequat qui consequat pariatur voluptate aliqua nostrud nostrud
          nostrud.
        </div>
        <div className="incidence-section-inner-illustrations">
          <IncidenceSectionCard
            title="Fire"
            photo={fire}
            underline={
              <u1 className="incidence-section-inner-illustrations-card-top-title-u1" />
            }
          />
          <IncidenceSectionCard
            title="Rape"
            photo={rape}
            underline={
              <u2 className="incidence-section-inner-illustrations-card-top-title-u2" />
            }
          />
          <IncidenceSectionCard
            title="Accident"
            photo={accident}
            underline={
              <u3 className="incidence-section-inner-illustrations-card-top-title-u3" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default IncidenceSection;
