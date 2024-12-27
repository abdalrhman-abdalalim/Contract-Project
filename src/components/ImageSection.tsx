import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import backGroundUrl from "../../assets/DALL-E-modern-sleek-interior-design.webpDALL-E-modern-sleek-interior-design.webp";

const ImageSection = () => {
  const onClickServices = () => {
    window.scrollTo({ top: 2300, behavior: "smooth" });
  };
  const onClickContact = () => {
    window.scrollTo({ top: 3300, behavior: "smooth" });
  };

  return (
    <section
      style={{
        backgroundImage: `url(${backGroundUrl})`,
        zIndex: -1,
      }}
      className="w-full h-screen overflow-x-hidden bg-top bg-cover"
    >
      <div className="flex items-center justify-center w-full h-screen bg-black opacity-80">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-center text-[#C0A001] font-bold text-2xl">
            # تشطيبات
          </h1>
          <motion.h1
            className="text-6xl font-bold text-center text-white max-md:text-5xl max-sm:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          >
            لخدمات المباني
          </motion.h1>
          <motion.p
            className="text-lg mb-4 text-center text-white mt-7 max-sm:text-sm text-wrap mx-auto w-[700px] max-sm:mt-3 max-md:w-[500px] max-md:mt-5 max-sm:w-[300px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          >
            نحن شركة متخصصة في خدمات التشطيبات، الترميم، وعزل خزانات المياه.
            نقدم حلولاً مبتكرة لضمان أعلى مستويات الجودة والجمال في تصميماتك، مع
            الالتزام بالمواعيد والدقة في التنفيذ لتحقيق رضا عملائنا الكرام.
          </motion.p>
          <motion.div
            className="flex items-center justify-around mx-auto mt-2 w-72"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          >
            <motion.button
              className="flex items-center p-3 text-white transition-all duration-300 ease-in-out bg-transparent border rounded-3xl hover:scale-110 max-sm:p-2 max-sm:text-sm"
              onClick={onClickContact}
              whileHover={{ scale: 1.1 }}
            >
              <ChevronRight size={20} />
              اتصل بنا
            </motion.button>
            <motion.button
              className="bg-[#C0A001] p-3 rounded-3xl flex items-center hover:scale-110 transition-all duration-300 ease-in-out max-sm:p-2 max-sm:text-sm"
              onClick={onClickServices}
              whileHover={{ scale: 1.1 }}
            >
              <ChevronRight size={20} />
              خدماتنا
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageSection;
