import React from "react";
import CirclesBg from "./CirclesBg";
import MacbookPro from ".././images/MacbookPro.png";
import Group from ".././images/Group.png";
import Iphone8 from ".././images/Iphone8.png";
import Desktop from ".././images/Desktop.png";
import X from ".././images/X.png";

const Downloadsection = () => {
  return (
    <div className="downloadSection">
      <CirclesBg />
      <div className="downloadSection__pc">
        <img className="downloadSection__pc-image" src={MacbookPro} alt="mac" />
        <img
          className="downloadSection__pc-image--1"
          src={Desktop}
          alt="iPhone"
        />
        <img
          className="downloadSection__pc-image-1"
          src={Iphone8}
          alt="iPhone"
        />
        <img className="downloadSection__pc-image-2" src={X} alt="iPhone" />
      </div>
      <div className="downloadSection__download">
        <h3>Download</h3>
        <p className="">
          Aliqua in ipsum amet velit ad dolore ullamco exercitation commodo
          consequat ea. Ex do incididunt est amet ut eiusmod id qui
          exercitation. Consectetur eiusmod ipsum ullamco sunt ipsum occaecat
          fugiat. Veniam ex ad consequat non.
        </p>
        <div>
            <img src={Group} alt="group" />
        </div>
      </div>
    </div>
  );
};

export default Downloadsection;
