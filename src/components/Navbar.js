import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import logo from "./Assets/logo.jpg";

const Navbar = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true);
    }, 1000);
  }, []);

  return (
    <nav className="bg-white p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Company Logo"
            className="h-12 w-12 mr-2"
          />
        </div>
        <Transition
          show={isButtonVisible}
          enter="transition-transform ease-in-out duration-1000"
          enterFrom="translate-x-[300%]"
          enterTo="translate-x-0"
          leave="transition-transform ease-in-out duration-1000"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-[-300%]"
        >
          {(ref) => (
            <ul
              ref={ref}
              className="flex space-x-6 text-black-900 text-lg font-bold"
            >
              <li>
                <a href="#emotions" className="transition duration-300 ease-in-out hover:text-blue-900">Emotions</a>
              </li>
              <li>
                <a href="#manifesto" className="transition duration-300 ease-in-out hover:text-blue-900">Manifesto</a>
              </li>
              <li>
                <a href="#self-awareness-test" className="transition duration-300 ease-in-out hover:text-blue-900">Self-Awareness Test</a>
              </li>
              <li>
                <a href="#work-with-us" className="transition duration-300 ease-in-out hover:text-blue-900">Work With Us</a>
              </li>
            </ul>
          )}
        </Transition>

        <Transition
          show={isButtonVisible}
          enter="transition-transform ease-in-out duration-1000"
          enterFrom="translate-x-[300%]"
          enterTo="translate-x-0"
          leave="transition-transform ease-in-out duration-1000"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-[-200%]"
        >
          {(ref) => (
            <button
              ref={ref}
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-purple-900 hover:text-white transition duration-300 ease-in-out"
            >
              Download app Now
            </button>
          )}
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;