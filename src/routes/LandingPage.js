import React from "react";
import Ticker from "react-ticker";
import Header from "../components/Header";
import MainSection from "../components/MainSection";

const LandingPage = () => {
  return (
    <div>
      <Ticker mode="smooth">
        {({ index }) => (
          <>
            <p className="ticker-font">
              You're in the right place for report!
            </p>
          </>
        )}
      </Ticker>
      <div className="parent">
        <Header />
        <MainSection />
      </div>
    </div>
  );
};

export default LandingPage;
