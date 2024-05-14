import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Gallery = () => {
  return (
    <section
      style={{
        background:
          "url('https://agat43.com/local/templates/agat/frontend/dev/assets/images/offer/bg.jpg')",
      }}
      className="w-full h-[31.5rem] overflow-hidden py-10 !bg-cover !bg-center !object-cover mt-10 px-20"
    >
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="700"
        className="flex items-center gap-10 text-white"
      >
        <img
          className="w-28 h-28 rounded-2xl"
          src="https://www.rubaltic.ru/upload/iblock/1c7/1c77c148461d88a38c4fe32223695b12.jpg"
          alt=""
        />
        <h1 className="text-5xl font-semibold tracking-wider">
          Effortless Delivery <br /> With Our Logistic <br /> Solutions
        </h1>
      </div>
      <div className="flex gap-5 flex-col text-white font-semibold text-lg tracking-wider mt-10">
        <img
          data-aos="zoom-out"
          data-aos-easing="linear"
          data-aos-duration="700"
          className="w-28 h-28 rounded-2xl ml-32"
          src="https://img.freepik.com/fotos-premium/grande-caminhao-entrega-mercadorias-em-caixas-para-abrir-porao-de-aviao-de-carga_124507-44692.jpg"
        />
        <p
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          Our Support Team is Always Available And Ready To Help With <br /> Any
          Delivery Issue You Have. Ensuring A Smooth Experience
        </p>
      </div>
    </section>
  );
};

export default Gallery;

// 	https://agat43.com/local/templates/agat/frontend/dev/assets/images/offer/bg.jpg
