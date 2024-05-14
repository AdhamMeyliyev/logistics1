import moment from "moment";
import { logo } from "../../assets/images/index";

const footerItem = [
  {
    class: "fa-brands fa-facebook",
  },
  {
    class: "fa-brands fa-instagram",
  },
  {
    class: "fa-brands fa-twitter",
  },
  {
    class: "fa-brands fa-youtube",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#061926]">
      <div className="flex px-20 py-20">
        <div className="flex flex-col gap-5">
          <div className="w-44">
            <img className="w-full h-full" src={logo} alt="" />
          </div>
          <ul className="flex gap-10 text-white text-3xl">
            {footerItem.map((item, i) => (
              <li key={i}>
                <i className={item.class}></i>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto flex gap-20">
          <div className="text-white text-lg">
            <h1 className="text-xl font-semibold">Quick links</h1>
            <ul>
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Gallery</li>
            </ul>
          </div>
          <div className="text-lg text-white">
            <h1 className="text-xl font-semibold">Company</h1>
            <ul>
              <li>About us</li>
              <li>FAQs</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="flex items-center text-white text-xl justify-between w-full border-t-4 
      px-20 py-10"
      >
        <div>© {moment().format("YYYY")} GSR Logistics</div>
        <div>Powered by: IT City Academy</div>
      </div>
    </footer>
  );
};

export default Footer;
