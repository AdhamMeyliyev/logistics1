import React, { useEffect, useState } from 'react';
import { logo } from '../../assets/images';
import AuthServices from '../../services/auth';
import { setItem } from '../../helpers/storege';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState('eye');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    if (type === 'password') {
      setIcon('eye-slash');
      setType('text');
    } else {
      setIcon('eye');
      setType('password');
    }
  };

  const user = {
    idNumber,
    password,
  };

  const handleClick = async () => {
    navigate('/dashboard');
    // setIsLoading(true);
    // try {
    //   const res = await AuthServices.getLogin(user);
    //   const data = res.data.data;
    //   const role = data.message;
    //   setItem("token", data.body);
    //   setItem("role", data.message);

    //   if (role === "ROLE_ADMIN") {
    //     navigate("/dashboard");
    //     return;
    //   } else if (role === "ROLE_MANAGER") {
    //     navigate("/manager");
    //     return;
    //   } else if (role === "ROLE_USER") {
    //     navigate("/user");
    //     return;
    //   } else if (role === "ROLE_CASHIER") {
    //     navigate("/cashier");
    //   } else {
    //     navigate("/");
    //     return;
    //   }
    //   setIsLoading(false);
    // } catch (error) {
    //   toast.error(error.message);
    //   console.log(error);
    //   setIsLoading(false);
    // }
  };

  return (
    <main className='flex h-screen items-center flex-col bg-[#ffeee8]'>
      <div className='w-60 bg-cover bg-center object-cover mt-10'>
        <img className='w-full' src={logo} alt='' />
      </div>
      <section className='w-[28rem] flex h-full items-center justify-center '>
        <div className='w-full bg-white rounded-xl shadow border md:mt-0 sm:max-w-md xl:p-0 border-[#f55520]'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <form
              onSubmit={(e) => e.preventDefault()}
              className='space-y-4 md:space-y-6 px-3'
              action='#'
            >
              <div>
                <label htmlFor='number' className='block mb-2 text-lg'>
                  Id Number
                </label>
                <input
                  type='text'
                  id='number'
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                  className='bg-gray-50 border-2 border-[#e4e6eb] text-lg rounded-xl focus:border-[#f55520]  block w-full p-3 outline-none dark:placeholder-gray-400'
                  placeholder='Number'
                  required
                />
              </div>
              <div>
                <label htmlFor='password' className='block mb-2 text-lg'>
                  Password
                </label>
                <div className='relative'>
                  <input
                    type={type}
                    id='password'
                    placeholder='••••••••'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='bg-gray-50 border-2 border-[#e4e6eb] text-lg rounded-xl focus:border-[#f55520]  block w-full p-3 outline-none dark:placeholder-gray-400'
                    required
                  />
                  <span
                    className='absolute top-4 right-5'
                    onClick={handleToggle}
                  >
                    <i className={`fa-solid fa-${icon}`}></i>
                  </span>
                </div>
              </div>

              <button
                onClick={handleClick}
                className='text-xl py-3 text-white font-medium bg-[#ba1e23] w-full rounded-xl'
              >
                {isLoading ? 'Loading..' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;

{
  /* <div>
  <div>
    <div className="mb-4 flex">
      <input
        type={type}
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
      />
      <span className="flex justify-around items-center" onClick={handleToggle}>
        <i className={`fa-solid fa-${icon}`}></i>
      </span>
    </div>
  </div>
</div>; */
}
