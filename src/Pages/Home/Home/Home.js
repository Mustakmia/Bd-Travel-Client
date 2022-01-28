import React from "react";
import Banner from "../Banner/Banner";
import Clients from "../Clients/Clients";
import Services from "../Services/Services";
import TourPackage from "../TourPackage/TourPackage";
import Choose from "./Chosse/Choose";
import './Home'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TourPackage></TourPackage>
      <Choose></Choose>
      <Services></Services>
      <Clients></Clients>
      {/* <About></About> */}
    </div>
  );
};

export default Home;
