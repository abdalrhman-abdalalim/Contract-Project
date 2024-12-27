import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import imgLogo from "../../../assets/cropped_image_processed_processed.png";
import { motion } from "framer-motion"; // Import motion
import "./navStyle.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 767) {
      setIsMenuOpen(false);
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onClickHome = () => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  };
  const onClickService = () => {
    window.scrollTo({ top: 700, behavior: "smooth" });
  };
  const onClickAbout = () => {
    window.scrollTo({ top: 1400, behavior: "smooth" });
  };
  const onClickContact = () => {
    window.scrollTo({ top: 3300, behavior: "smooth" });
  };

  return (
    <nav className="text-black border-gray-200 dark:bg-[#FAFAFA] ">
      <div className="grid h-[115px] grid-cols-4 max-sm:h-24 max-md:h-28 max-xs1:h-20 max-xs2:h-16 border-b-2 border-[#C0A001]">
        <div className="h-32 max-sm:h-24 max-xs1:h-16">
          <img
            src={imgLogo}
            className="mx-auto -mt-3 size-36 max-md:size-32 max-sm:size-28 max-sm:mt-[-5px] max-xs1:-mt-5 max-xs2:size-20 max-xs2:-mt-3"
            alt="logo"
          />
        </div>

        <div className="flex items-center mx-auto my-auto max-sm:h-24 max-md:mx-5 max-sm:mr-0 max-xs1:h-10  max-xs1:block max-xs1:-mt-[5px] max-xs2:-mt-1 max-xs2:mr-1">
          <MapPin
            className="size-[55px] max-sm:min-h-[30px] max-sm:min-w-[44px] max-sm:w-[44px] max-sm:h-[55px] max-xs1:-mb-8"
            color="#FAFAFA"
            fill="#C0A001"
          />
          <div className="block mt-4 text-start">
            <p className="text-2xl text-[#0753AD] font-bold max-lg:text-[20px] max-md:text-[17px] max-sm:text-[15px] max-xs2:text-[12px] max-sm:-mb-2 max-xs2:-mt-4 max-xs2:w-20">
              السعودية
            </p>
            <p className="h-[40px] text-sm font-bold text-gray-600 min-w-[70px] max-md:text-[12px] max-sm:text-[10px] max-xs2:text-[9px] max-xs2:hidden">
              بريدة القصيم
            </p>
          </div>
        </div>

        <div className="flex items-center mx-auto my-auto max-md:mr-2 max-sm:-mr-2 max-xs1:h-10 max-xs1:block max-xs1:mt-[6px] max-xs2:-mr-1">
          <Phone
            className="size-[50px] max-sm:size-[35px] max-xs1:-mb-1 max-xs1:mx-auto"
            color="#FAFAFA"
            fill="#C0A001"
          />
          <div className="mr-1 text-start">
            <p
              className="text-2xl text-[#0753AD] font-bold text-left max-lg:text-[18px] max-md:text-[15px] max-sm:text-[13px] max-sm:-mb-3 max-xs2:text-[12px] max-xs2:text-center"
              dir="ltr"
            >
              572314298
            </p>
            <p className="text-sm font-bold text-gray-600 max-md:text-[12px] max-sm:text-[10px] max-xs2:hidden">
              هاتفي الشخصي
            </p>
          </div>
        </div>

        <div className="flex items-center mx-auto my-auto max-sm:mr-0 max-xs1:h-10 max-xs1:block max-xs1:mt-1 max-xs2:mr-2">
          <MdWorkHistory
            size={50}
            fill="#C0A001"
            className="max-sm:size-[35px] max-xs1:-mb-5 max-xs1:mx-auto"
          />
          <div className="mt-4 mr-1">
            <p className="text-2xl text-[#0753AD] font-bold max-lg:text-[20px] max-md:text-[17px] max-xs2:text-[12px] max-sm:text-[14px] max-sm:-mb-2 max-xs1:text-center">
              يومياً
            </p>
            <p className="text-xs h-[40px] font-bold text-right text-gray-600 max-md:text-[12px] max-w-[150px] max-sm:text-[10px] text-wrap max-xs2:hidden max-xs2:mx-auto">
              واتساب متاح دائما
            </p>
          </div>
        </div>
      </div>

      <div className="min-w-screen-xl flex items-center justify-between relative bg-[#0753AD] shadow-md shadow-gray-500 max-md:flex max-md:justify-between max-md:items-start">
        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-1 text-sm md:hidden dark:text-white"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* Navigation Links */}
        <motion.div
          className={`${
            isMenuOpen
              ? "block absolute z-50 top-10 shadow-gray-600 shadow-md w-fit p-5 bg-[#0753AD]"
              : "hidden"
          }  md:block md:w-auto flex`}
          id="navbar-default"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <ul
            className="font-medium flex flex-col p-0 border border-gray-100  bg-[#0753AD] rtl:space-x-reverse max-md:border-0
             md:flex-row  mt-0 md:border-0 max-md:bg-[#0753AD] md:dark:bg-[#0753AD] md:p-0"
          >
            <li>
              <NavLink
                end
                to="/"
                onClick={onClickHome}
                className="block p-4 text-white transition-all duration-300 ease-in max-md:py-2 md:border-0 max-md:text-white dark:hover:bg-[#C0A001]"
              >
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={onClickService}
                className="block hover:bg-[#0753AD] text-white p-4 max-md:border-0 duration-300 ease-in max-md:py-2 transition-all md:border-0  dark:hover:bg-[#C0A001] max-md:text-white"
              >
                خدماتنا
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={onClickAbout}
                className="block  text-white p-4 max-md:border-0  max-md:py-2 transition-all duration-300 ease-in hover:bg-[#C0A001] md:hover:bg-[#C0A001] md:border-0  dark:hover:bg-[#C0A001] md:dark:hover:bg-[#C0A001] max-md:text-white"
              >
                من نحن
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={onClickContact}
                className="block  text-white p-4 max-md:border-0  max-md:py-2 transition-all duration-300 ease-in hover:bg-[#C0A001] md:hover:bg-[#C0A001] md:border-0  dark:hover:bg-[#C0A001] md:dark:hover:bg-[#C0A001] max-md:text-white"
              >
                تواصل معنا
              </NavLink>
            </li>
          </ul>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-around items-center w-32 mr-3 max-md:my-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="assets\instagram.png"
              alt="insta-icon"
              className="h-[20px]"
            />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-[#25D366]" />
          </a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Nav;
