import React from "react";
import Ticker from "react-ticker";
import Header from "../components/Header";
import MainSection from "../components/MainSection";

const LandingPage = () => {
  return (
    <div className="container">
      <Ticker mode="smooth">
        {({ index }) => (
          <>
            <p className="ticker-font">
              {" "}
              You're in the right place for report!{" "}
            </p>
          </>
        )}
      </Ticker>
      <div>
        <Header />
        <MainSection />
      </div>
    </div>
  );
};

export default LandingPage;
