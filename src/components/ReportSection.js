import React from "react";
import { Badge } from "./Badge";
import CirclesBg from './CirclesBg';
import police from ".././images/police.png";
import lasemaa from ".././images/lasemaa.png";
import fireservice from ".././images/fireservice.png";
import efcc from ".././images/efcc.png";
import frsc from ".././images/frsc.png";
import nscdc from ".././images/nscdc.png";

const Reportsection = () => {
  return (
    <section className="report-section">
      <div className="report-section-top">
        <h2 className="report-section-top__heading">Report Center</h2>
        <div className="bottom-outline"></div>
        <CirclesBg />
        <div className="report-section-badges">
          <div className="report-section-badges-1">
            <Badge badgeTitle="Police Headquaters" badgeLogo={police}  />
            <Badge badgeTitle="Lagos State Emergency" badgeLogo={lasemaa}  />
            <Badge badgeTitle="Federal Fire Service" badgeLogo={fireservice}  />
          </div>
          <div className="report-section-badges-2">
            <Badge badgeTitle="Economic and Financial Crimes Commission" badgeLogo={efcc}  />
            <Badge badgeTitle="Federal Road Safety Corps" badgeLogo={frsc}  />
            <Badge badgeTitle="National Center for Disease Control" badgeLogo={nscdc}  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reportsection;
