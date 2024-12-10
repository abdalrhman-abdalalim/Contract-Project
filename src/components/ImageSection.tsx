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
      className="w-full h-screen bg-cover bg-top overflow-x-hidden"
    >
      <div className="h-screen flex items-center justify-center bg-black w-full opacity-80">
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
            className="text-center text-white font-bold text-6xl max-md:text-5xl max-sm:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          >
            لخدمات المباني
          </motion.h1>
          <motion.p
            className="text-md text-center text-white mt-7 text-wrap mx-auto w-[700px] max-md:w-[500px] max-md:text-sm max-md:mt-5 max-sm:w-[300px] max-sm:mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          >
            نحن شركة متخصصة في خدمات التشطيبات، الترميم، وعزل خزانات المياه.
            نقدم حلولاً مبتكرة لضمان أعلى مستويات الجودة والجمال في تصميماتك، مع
            الالتزام بالمواعيد والدقة في التنفيذ لتحقيق رضا عملائنا الكرام.
          </motion.p>
          <motion.div
            className="flex items-center justify-around w-72 mt-2 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          >
            <motion.button
              className="bg-transparent p-3 rounded-3xl border flex items-center text-white hover:scale-110 transition-all duration-300 ease-in-out max-sm:p-2 max-sm:text-sm"
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
