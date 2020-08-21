import React from "react";
import policecar from ".././images/policecar.png";
import lasema from ".././images/lasema.png";
import civil from ".././images/civil.png";

const Agencybadge = () => {
  return (
    <div className="agenciesSection__cards">
      <div className="agenciesSection__cards-1">
        <div className="agenciesSection__image-box">
          <img className="agenciesSection__image-box-image" src={policecar} alt="peck" />
        </div>
        <div className="agenciesSection__cards-1-body">
          <h4>Police Force</h4>
          <p className="agenciesSection__cards-1-text">
            Consectetur ex in excepteur culpa cupidatat magna ut deserunt
            reprehenderit irure culpa aliqua.
          </p>
        </div>
      </div>
      <div className="agenciesSection__cards-2">
      <div className="agenciesSection__image-box">
          <img className="agenciesSection__image-box-image" src={lasema} alt="peck" />
        </div>
        <div className="agenciesSection__cards-1-body">
          <h4>Lasema Response Unit</h4>
          <p className="agenciesSection__cards-1-text">
            Consectetur ex in excepteur culpa cupidatat magna ut deserunt
            reprehenderit irure culpa aliqua.
          </p>
        </div>
      </div>
      <div className="agenciesSection__cards-3">
      <div className="agenciesSection__image-box">
          <img className="agenciesSection__image-box-image" src={civil} alt="peck" />
        </div>
      <div className="agenciesSection__cards-1-body">
          <h4>Civil Defence</h4>
          <p className="agenciesSection__cards-1-text">
            Consectetur ex in excepteur culpa cupidatat magna ut deserunt
            reprehenderit irure culpa aliqua.
          </p>
        </div>
      </div>
    </div>
    // <div className="agenciesSection__cards">
    //   <div className="agenciesSection__cards-1">
    //     <div className="agenciesSection__image-box">
    //       <img
    //         className="agenciesSection__image-box-image"
    //           src={img}
    //         alt="peck"
    //       />
    //     </div>
    //     <div className="agenciesSection__cards-1-body">
    //       <h4>Police Force</h4>
    //       <p className="agenciesSection__cards-1-text">
    //         Consectetur ex in excepteur culpa cupidatat magna ut deserunt
    //         reprehenderit irure culpa aliqua.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Agencybadge;
