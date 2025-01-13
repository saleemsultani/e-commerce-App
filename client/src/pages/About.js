import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to Ecommerce, your go-to destination for seamless online
            shopping. We are here to make your life easier by connecting you
            with high-quality products and delivering them right to your
            doorstep. Whether you are hunting for the latest trends, everyday
            essentials, or unique finds, we have got you covered.
            <h3>Our Promise</h3>
            Variety and Quality:
            <br /> From fashion to electronics, home essentials to specialty
            items, our curated selection is designed to cater to your diverse
            needs. Convenience:
            <br /> With a user-friendly app, fast checkouts, and reliable
            delivery services, we make shopping hassle-free.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
