import React from "react";
import Banner from "../../components/Home/Banner";
import BenefitsOfMinting from "../../components/Home/BenefitsOfMinting";
import ClubNet from "../../components/Home/ClubNet";
import MembershipPass from "../../components/Home/MembershipPass";

const Home = () => {
  return (
    <>
      <Banner />
      <MembershipPass />
      <ClubNet />
      <BenefitsOfMinting />
    </>
  );
};

export default Home;
