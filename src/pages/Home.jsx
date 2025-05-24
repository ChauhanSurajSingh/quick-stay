import React from "react";
import ExclusiveOffers from "../components/ExclusiveOffers";
import FeaturedDestination from "../components/FeaturedDestination";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import AppNewsLetter from "../components/AppNewsLetter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonial />
      <AppNewsLetter />
    </>
  );
};

export default Home;
