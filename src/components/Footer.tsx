import { BriefcaseBusiness, MapPinned, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const Footer = () => {
  return (
    <footer className="relative bg-[#0753AD] h-72 overflow-hidden mt-5">
      <div className="absolute -top-10 left-0 -right-3 h-14 bg-[#C0A001] rounded-sm rotate-1"></div>

      {/* Adding animation to the paragraph */}
      <motion.p
        className="mt-10 w-72 text-xs text-white italic mx-auto"
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
        className="flex justify-between mt-5 text-white w-72 mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex items-center">
          <MapPinned className="w-4 h-11 max-md:w-7 max-md:h-7 max-sm:h-5" />
          <h4 className="text-xs mr-1 text-[#C0A001] font-bold">
            {" "}
            بريدة القصيم
          </h4>
        </div>
        <div className="flex items-center">
          <Phone className="w-4 h-10 max-xl1:h-8 max-xl1:w-9 max-md:w-7 max-md:h-7 max-sm:h-5" />
          <h4 className="text-xs mr-1 text-[#C0A001] font-bold">
            966572314298+
          </h4>
        </div>
        <div className="flex items-center">
          <BriefcaseBusiness className="w-4 h-10 max-xl1:h-8 max-xl1:w-9 max-md:w-8 max-md:h-8 max-sm:h-6" />
          <h4 className="text-xs mr-1 text-[#C0A001] font-bold">يومياً</h4>
        </div>
      </motion.div>

      {/* Adding animation to social media links */}
      <motion.div
        className="flex justify-around mx-auto mt-7 w-32 max-md:my-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <a href="https://www.instagram.com/tash.tib/" target="blank">
          <FaInstagram className="fill-white hover:fill-[#C0A001]" />
        </a>
        <a href="https://www.facebook.com/" target="blank">
          <FaFacebookF className="fill-white hover:fill-[#C0A001]" />
        </a>
        <a href="https://wa.me/+966572314298" target="blank">
          <FaWhatsapp className="fill-white hover:fill-[#C0A001]" />
        </a>
      </motion.div>

      {/* Adding animation to the footer text */}
      <motion.h4
        className="text-white text-center text-xs mt-10"
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
