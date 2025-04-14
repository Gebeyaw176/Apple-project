import React from "react";

import SectionFive from "../SectionFive/SectionFive";
import SectionFour from "../SectionFour/SectionFour"
import SectionOne from "../SectionOne/SectionOne"
import SectionTwo from "../SectionTwo/SectionTwo"
import SectionSix from "../SectionSix/SectionSix"
import SectionThree from "../SectionThree/SectionThree"
import AlertSection from "./AlertSection";
const MainSection = () => {
  return (
    <div>
      <AlertSection/>
      <SectionFive />
      <SectionFour />
      <SectionOne />
      <SectionTwo />
      <SectionSix />
      <SectionThree />
    </div>
  );
};

export default MainSection;
