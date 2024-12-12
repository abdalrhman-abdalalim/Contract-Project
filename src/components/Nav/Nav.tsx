import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MapPinned, Phone, BriefcaseBusiness } from "lucide-react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
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
      {/* Header Section */}
      <motion.div
        className="text-black text-center p-3 h-32 flex items-center justify-center max-md:h-24 max-sm:h-20 max-xs1:h-[64px] border-b-4 border-b-[#C0A001]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={imgLogo}
          className="w-44 max-xl1:w-32 max-md:w-28 max-sm:w-[90px] max-xs1:absolute max-xs1:right-0"
          alt="logo"
        />
        <div className="flex mr-24 max-xl1:mr-8 max-xs1:absolute max-xs1:left-0 max-xs1:h-[84px] max-xs1:mt-16 max-xs1:justify-center">
          {/* Location Section */}
          <motion.div
            className="flex w-44 items-center max-xl1:w-[130px] max-md:w-[100px] max-sm:w-[80px] max-xs1:h-7 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <MapPinned className="w-11 h-11 max-md:w-7 max-md:h-7 max-sm:h-5" />
            <div className="mr-1 text-start">
              <p className="text-xl text-[#0753AD] font-bold max-xl1:text-[17px] max-md:text-[12px] max-sm:text-[9px]">
                السعودية
              </p>
              <p className="text-xs text-gray-400 max-md:text-[8px] max-md:mt-[-5px] max-sm:text-[6px] max-sm:mt-[-8px] ">
                حي الريان بريدة القصيم
              </p>
            </div>
          </motion.div>
          {/* Phone Section */}
          <motion.div
            className="flex w-64 items-center max-xl1:w-48 max-xl1:mr-3 max-md:w-[130px] max-sm:w-[110px] max-xs1:mr-0 max-xs1:h-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <Phone className="w-11 h-10 max-xl1:h-8 max-xl1:w-9 max-md:w-7 max-md:h-7 max-sm:h-5" />
            <div className="mr-1 text-start">
              <p
                className="text-xl text-[#0753AD] font-bold text-left max-xl1:text-[17px] max-md:text-[12px] max-sm:text-[9px]"
                dir="ltr"
              >
                +966572314298
              </p>
              <p className="text-xs text-gray-400 max-md:text-[8px] max-md:mt-[-5px] max-sm:text-[6px] max-sm:mt-[-8px] ">
                هاتفي الشخصي
              </p>
            </div>
          </motion.div>
          {/* Work Time Section */}
          <motion.div
            className="flex w-64 items-center max-xl1:w-56 max-xl1:mr-3 max-md:w-[90px] max-xs1:mr-[-2px] max-xs1:h-7 max-xs2:hidden "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            <BriefcaseBusiness className="w-11 h-10 max-xl1:h-8 max-xl1:w-9 max-md:w-8 max-md:h-8 max-sm:h-6" />
            <div className="mr-1">
              <p className="text-xl text-[#0753AD] font-bold max-xl1:text-[16px] max-md:text-[12px] max-sm:text-[9px]">
                يومياً
              </p>
              <p className="text-xs text-right text-gray-400 max-md:text-[8px] max-md:mt-[-5px] max-sm:text-[6px] max-sm:mt-[-8px]">
                واتساب متاح دائما
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="min-w-screen-xl flex items-center justify-between relative bg-[#0753AD] shadow-md shadow-gray-500 max-md:flex max-md:justify-between max-md:items-start">
        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center p-1 w-10 h-10 justify-center text-sm  md:hidden  dark:text-white"
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
                className="block  p-4 text-white  max-md:py-2 transition-all duration-300 ease-in-out hover:bg-[#C0A001] md:hover:bg-[#C0A001] md:border-0  dark:hover:bg-[#C0A001] md:dark:hover:bg-[#C0A001] max-md:text-white"
              >
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={onClickService}
                className="block  text-white p-4 max-md:border-0  max-md:py-2 transition-all duration-300 ease-in-out hover:bg-[#C0A001] md:hover:bg-[#C0A001] md:border-0  dark:hover:bg-[#C0A001] md:dark:hover:bg-[#C0A001] max-md:text-white"
              >
                خدماتنا
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={onClickAbout}
                className="block  text-white p-4 max-md:border-0  max-md:py-2 transition-all duration-300 ease-in-out hover:bg-[#C0A001] md:hover:bg-[#C0A001] md:border-0  dark:hover:bg-[#C0A001] md:dark:hover:bg-[#C0A001] max-md:text-white"
              >
                من نحن
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={onClickContact}
                className="block  text-white p-4 max-md:border-0  max-md:py-2 transition-all duration-300 ease-in-out hover:bg-[#C0A001] md:hover:bg-[#C0A001] md:border-0  dark:hover:bg-[#C0A001] md:dark:hover:bg-[#C0A001] max-md:text-white"
              >
                تواصل معنا
              </NavLink>
            </li>
          </ul>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-around w-32 max-md:my-3 mr-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white  hover:text-[#C0A001]" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-white  hover:text-[#C0A001]" />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-white  hover:text-[#C0A001]" />
          </a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Nav;
