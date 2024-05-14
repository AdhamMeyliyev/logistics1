import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Server = () => {
  return (
    <section className="flex justify-center flex-col text-center items-center">
      <h1
        data-aos="zoom-out"
        data-aos-easing="linear"
        data-aos-duration="700"
        className="text-5xl font-semibold tracking-wider"
      >
        <span className="text-[#1b648c]">Shipping</span> & Logistic <br />
        Services
      </h1>
      <div className="flex justify-between gap-20 mt-5">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="700"
          className="flex justify-center cursor-pointer items-center w-80 h-80 bg-cover bg-center object-cover relative"
        >
          <img
            className="rounded-[3rem] w-full h-full object-cover"
            src="https://eastline-logistics.uz/images/services/truck3.jpg"
            alt=""
          />
          <div className="flex items-center opacity-0 hover:opacity-100 hover:w-[105%] hover:h-[105%] absolute w-full h-full transition-all duration-500 rounded-[3rem] bg-black/50">
            <div className="w-full px-7 flex items-center justify-between">
              <p className="text-xl text-white">Road transportion</p>
              <i className="fa-solid fa-arrow-right-to-bracket fa-2xl text-white font-black"></i>
            </div>
          </div>
        </div>
        <div>
          <button
            data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="shipping2 text-3xl w-80 h-24 transition-all duration-500 border hover:border-[#0066CC] hover:bg-transparent hover:text-[#0066CC] py-1 text text-white mb-3 bg-[#02012d] rounded-[2rem]"
          >
            SHARE ↗️
          </button>{" "}
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="flex justify-center items-center cursor-pointer w-80 h-80 bg-cover bg-center object-cover relative"
          >
            <img
              className="rounded-[3rem] w-full h-full object-cover"
              src="	https://img.freepik.com/premium-photo/internationa…ics-and-freight-transportation-s_410516-18607.jpg"
              alt=""
            />
            <div className="flex items-center opacity-0 hover:opacity-100 hover:w-[105%] hover:h-[105%] absolute w-full h-full transition-all duration-500 rounded-[3rem] bg-black/50">
              <div className="w-full px-7 flex items-center justify-between">
                <p className="text-xl text-white">Ship transportion</p>
                <i className="fa-solid fa-arrow-right-to-bracket fa-2xl text-white font-black"></i>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="700"
          className="flex justify-center cursor-pointer items-center w-80 h-80 bg-cover bg-center object-cover relative"
        >
          <img
            className="rounded-[3rem] w-full h-full object-cover"
            src="https://img.freepik.com/free-photo/airplane-in-the-track-front-view-generative-ai_188544-7895.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702339200&semt=ais"
            alt=""
          />
          <div className="flex items-center opacity-0 hover:opacity-100 hover:w-[105%] hover:h-[105%] absolute w-full h-full transition-all duration-500 rounded-[3rem] bg-black/50">
            <div className="w-full px-7 flex items-center justify-between">
              <p className="text-xl text-white">Air transportion</p>
              <i className="fa-solid fa-arrow-right-to-bracket fa-2xl text-white font-black"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Server;
