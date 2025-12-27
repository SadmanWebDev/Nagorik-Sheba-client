import React from "react";
import Banner from "../../components/Home/Banner";
import LatestResolved from "../../components/Home/LatestResolved";
import Features from "../../components/Home/Features";
import HowItWork from "../../components/Home/HowItWork";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestResolved></LatestResolved>
      <Features></Features>
      <HowItWork></HowItWork>
      <h1>Extra 2 section need to be created</h1>
    </div>
  );
};
export default Home;