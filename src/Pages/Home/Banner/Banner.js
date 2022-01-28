import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <img className="baner" src="https://image.freepik.com/free-psd/explore-concept-banner-template_23-2148652998.jpg" alt="" />

      <button className="mt-5" >  <Link className="explore" to="/explore">More Explore</Link></button>
    </div>
  );
};

export default Banner;
