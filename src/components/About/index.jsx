import { kontainer, tracking } from '../../assets/images';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const About = () => {
  return (
    <section>
      <div className='p-0 m-0'>
        <img src={tracking} alt='tracking' />
      </div>
      <div className='flex justify-center'>
        <div>
          <h4
            data-aos='fade-right'
            data-aos-easing='linear'
            data-aos-duration='700'
            className='text-5xl font-medium tracking-wider mt-5'
          >
            Deliver Your <span className='text-[#1b648c]'>Logistic</span> <br />
            Safely & Quickly
          </h4>
          <p
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration='700'
            className='text-lg mt-5'
          >
            From start to finish, our seamless logistics service
          </p>
        </div>
        <div
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='700'
          className='w-2/4 -mt-44'
        >
          <img src={kontainer} alt='' />
        </div>
      </div>
    </section>
  );
};

export default About;
