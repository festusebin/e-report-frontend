import React from "react";

export const Badge = ({badgeTitle, badgeLogo}) => { 
  return (
    <div className="report-section-badges-1-badge">
      <div className="report-section-badges-1-badge-title">
        <div className="report-section-badges-1-badge-title-text">
          {badgeTitle}
        </div>
        <div className="report-section-badges-1-badge-title-logo">
          <img src={badgeLogo} alt="about photos" />
        </div>
      </div>
      <div className="report-section-badges-1-badge-link">
        <div className="report-section-badges-1-badge-link-1">08036363636</div>
        <div className="report-section-badges-1-badge-link-2">Report here</div>
      </div>
    </div>
  );
};
