import { BriefcaseBusiness, MapPinned, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import instaLogo from "../../assets/instagram.png"
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const Footer = () => {
  return (
    <footer className="relative bg-[#0753AD] h-72 overflow-hidden mt-5">
      <div className="absolute -top-10 left-0 -right-3 h-14 bg-[#C0A001] rounded-sm rotate-1"></div>

      {/* Adding animation to the paragraph */}
      <div className="grid grid-rows-3 mt-10 gap-y-10 max-xs0:gap-y-0 max-sm:gap-14">
        {/* Paragraph Section */}
        <motion.p
          className="max-w-[600px] text-md text-white italic mx-auto text-center max-sm:text-[13px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          نقدم حلول مبتكرة من محترفي التصميم الداخلي والخارجي مصممة لتناسب نمط
          حياتك مع وضع ميزانيتنا في الاعتبار ومواكبة تفضيلاتك التي تجعل منزلك
          مميزًا عن المنازل المعتادة
        </motion.p>

        {/* Contact Info Section */}
        <motion.div
          className="grid grid-cols-3 gap-y-4 max-xs0:grid-cols-1 max-xs0:gap-y-2 text-white max-w-[500px] mx-auto max-xs0:-mt-2 max-xs2:-mt-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-center mx-auto">
            <MapPinned className="w-6 h-11 max-md:w-6 max-md:h-7 max-sm:h-6" />
            <h4 className="text-md mr-1 text-[#C0A001] font-bold text-center">
              بريدة القصيم
            </h4>
          </div>
          <div className="flex items-center mx-auto">
            <Phone className="w-6 h-9 max-xl1:h-9 max-xl1:w-6 max-md:w-6 max-md:h-7 max-sm:h-7" />
            <h4 className="text-md mr-1 text-[#C0A001] font-bold text-center">
              966572314298+
            </h4>
          </div>
          <div className="flex items-center mx-auto">
            <BriefcaseBusiness className="w-6 h-10 max-xl1:h-8 max-xl1:w-6 max-md:w-6 max-md:h-8 max-sm:h-6" />
            <h4 className="text-md mr-1 text-[#C0A001] font-bold text-center">
              يومياً
            </h4>
          </div>
        </motion.div>

        {/* Social Media Links Section */}
        <motion.div
          className="flex items-center justify-around w-32 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <a href="https://www.instagram.com/tash.tib/" target="blank">
            <img src={instaLogo} alt="insta-icon" className="h-[26px]" />
          </a>

          <a
            href="https://wa.me/+966572314298"
            target="blank"
            className="hover:cursor-pointer"
          >
            <FaWhatsapp className="fill-[#25D366] h-5 " />
          </a>
        </motion.div>
      </div>

      {/* Adding animation to the contact info section */}

      {/* Adding animation to social media links */}

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
