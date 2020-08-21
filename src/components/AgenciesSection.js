import React from "react";
import AgencyBadge from "./AgencyBadge";

function AgenciesSection() {
  return (
    <div className="container agenciesSection">
      <h2 className="report-section-top__heading">Agencies</h2>
      <div className="bottom-outline"></div>
      <div className="agenciesSection__links">
        <button
          type="button"
          className="btn agenciesSection__links-btn btn-active"
        >
          Security
        </button>
        <button type="button" className="btn agenciesSection__links-btn">
          Health
        </button>
        <button type="button" className="btn agenciesSection__links-btn">
          Road
        </button>
        <button type="button" className="btn agenciesSection__links-btn">
          Society
        </button>
      </div>
      <AgencyBadge />
      <div className="agenciesSection__foot">
        Elit incididunt anim irure quis sint exercitation veniam ex do est. Et
        qui irure do cupidatat laborum dolore aliquip non esse deserunt aute.
        Est ipsum occaecat excepteur magna officia excepteur irure sunt et culpa
        minim dolor irure minim.
      </div>
    </div>
  );
}

export default AgenciesSection;
