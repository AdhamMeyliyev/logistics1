import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { kamaz } from "../../assets/images";
import About from "../../components/About/index";
import Server from "../../components/Services/index";
import Gallery from "../../components/Gallery";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  return (
    <div>
      <Header />
      <section className="flex w-full items-center justify-center px-24 mt-32">
        <div className="flex flex-col gap-y-10">
          <h1
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="text-6xl font-ui font-semibold"
          >
            We Will Deliver Your <br /> Packages Anywhere!
          </h1>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="700"
          >
            <h3 className="text-4xl font-light">FIND IT | BUY IT | SHIP IT</h3>
            <p className="text-2xl">
              We let you shop around the world and ship <br /> to logisippo
              straight to your doorstep!
            </p>
          </div>
        </div>
        <div
          className="w-2/4"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <img className="w-full" src={kamaz} alt="kamaz" />
        </div>
      </section>
      <About />
      <Server />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
