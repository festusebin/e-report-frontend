import React from "react";
import AboutSection from "./AboutSection";
import ReportSection from "./ReportSection";
import IncidenceSection from "./IncidenceSection";
import AgenciesSection from "./AgenciesSection";
import DownloadSection from "./DownloadSection";
import Footer from "./Footer";



const MainSection = () => {
  return (
    <main>
      <AboutSection />
      <ReportSection />
      <IncidenceSection />
      <AgenciesSection />
      <DownloadSection />
      <Footer />
    </main>
  );
};

export default MainSection;
