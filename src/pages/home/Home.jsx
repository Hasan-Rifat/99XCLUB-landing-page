import React from "react";
import Accordion from "../../components/Home/Accordion";
import Banner from "../../components/Home/Banner";
import BenefitsOfMinting from "../../components/Home/BenefitsOfMinting";
import ClubNet from "../../components/Home/ClubNet";
import MembershipPass from "../../components/Home/MembershipPass";
import Projects from "../../components/Home/Projects";
import RewardSystem from "../../components/Home/RewardSystem";
import Slider from "../../components/Home/Slider";

const Home = () => {
  return (
    <>
      <Banner />
      <MembershipPass />
      <ClubNet />
      <BenefitsOfMinting />
      <RewardSystem />
      <Slider />
      <Projects />
      <Accordion />
    </>
  );
};

export default Home;
