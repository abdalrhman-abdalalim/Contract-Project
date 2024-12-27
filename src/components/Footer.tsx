import { BriefcaseBusiness, MapPinned, Phone } from "lucide-react";
import {  FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const Footer = () => {
  return (
    <footer className="relative bg-[#0753AD] h-72 overflow-hidden mt-5">
      <div className="absolute -top-10 left-0 -right-3 h-14 bg-[#C0A001] rounded-sm rotate-1"></div>

      {/* Adding animation to the paragraph */}
      <motion.p
        className="mt-10 max-w-[600px] text-md text-white italic mx-auto text-center max-sm:text-[13px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        نقدم حلول مبتكرة من محترفي التصميم الداخلي والخارجي مصممة لتناسب نمط
        حياتك مع وضع ميزانيتنا في الاعتبار ومواكبة تفضيلاتك التي تجعل منزلك
        مميزًا عن المنازل المعتادة
      </motion.p>

      {/* Adding animation to the contact info section */}
      <motion.div
        className="grid grid-cols-3 max-xs0:grid-cols-1 mt-5 max-xs2:mt-1 text-white max-w-[500px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex items-center mx-auto max-xs0:my-1">
          <MapPinned className="w-6 h-11 max-md:w-6 max-md:h-7 max-sm:h-6" />
          <h4 className="text-md mr-1 text-[#C0A001] font-bold text-center ">
            بريدة القصيم
          </h4>
        </div>
        <div className="flex  items-center mx-auto max-xs0:my-2">
          <Phone className="w-6 h-9 max-xl1:h-9 max-xl1:w-6 max-md:w-6 max-md:h-7 max-sm:h-7" />
          <h4 className="text-md mr-1 text-[#C0A001] font-bold text-center ">
            966572314298+
          </h4>
        </div>
        <div className="flex  items-center mx-auto max-xs0:my-2">
          <BriefcaseBusiness className="w-6 h-10 max-xl1:h-8 max-xl1:w-6 max-md:w-6 max-md:h-8 max-sm:h-6" />
          <h4 className="text-md mr-1 text-[#C0A001] font-bold text-center ">
            يومياً
          </h4>
        </div>
      </motion.div>

      {/* Adding animation to social media links */}
      <motion.div
        className="flex justify-around items-center mx-auto mt-9 w-32 max-md:mt-10 max-xs0:mt-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <a href="https://www.instagram.com/tash.tib/" target="blank">
          <img
            src="assets\instagram.png"
            alt="insta-icon"
            className="h-[26px]"
          />
        </a>

        <a
          href="https://wa.me/+966572314298"
          target="blank"
          className="hover:cursor-pointer"
        >
          <FaWhatsapp className="fill-[#25D366] h-5 " />
        </a>
      </motion.div>

      {/* Adding animation to the footer text */}
      <motion.h4
        className="text-white text-center w-full ml-3 text-xs mt-10 absolute bottom-0 right-[50%] translate-x-[50%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
      >
        2023 All Rights Reserved @
      </motion.h4>
    </footer>
  );
};

export default Footer;
