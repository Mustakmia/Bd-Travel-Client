import React from "react";
import Banner from "../Banner/Banner";
import Clients from "../Clients/Clients";
import Services from "../Services/Services";
import TourPackage from "../TourPackage/TourPackage";
import './Home'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TourPackage></TourPackage>
      <Services></Services>
      <Clients></Clients>
      {/* <About></About> */}
    </div>
  );
};

export default Home;
