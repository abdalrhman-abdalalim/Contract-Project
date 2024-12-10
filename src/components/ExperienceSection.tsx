import { motion } from "framer-motion";
import experienceImg1 from "../../assets/water_tank_insulation_for_company_website.jpeg";
import experienceImg2 from "../../assets/finishing_works_in_house_for_company_website.jpeg";

const ExperienceSection = () => {
  return (
    <section className="container max-w-[950px] p-5 h-fit mx-auto lg:max-w-[1200px] lg:p-10 mt-10">
      <div className="grid grid-cols-2 grid-rows-1 max-md:grid-cols-1 max-md:grid-rows-2">
        {/* Images Div */}
        <div className="relative flex flex-col items-center mr-7 max-md:order-0 lg:mr-10">
          <motion.img
            src={experienceImg1}
            alt="experience image"
            className="w-80 max-md:w-52 lg:h-[400px] lg:w-[400px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.img
            src={experienceImg2}
            alt="experience image"
            className="w-72 border-white border-8 relative -mt-36 max-md:w-48 -mr-20 max-md:-mt-[95px] max-sm:-mt-20 lg:w-[350px] lg:-mt-72 lg:-mr-24 lg:h-[400px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
        {/* Texts Div */}
        <div className="flex-1 order-0 md:order-1">
          <motion.h6
            className="text-[#C0A001] font-bold max-md:text-[15px] lg:text-[22px]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            فخورون بنا
          </motion.h6>
          <motion.h3
            className="text-3xl font-bold max-md:text-[24px] lg:text-5xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            15 عامًا من الخبرة
          </motion.h3>
          <motion.p
            className="text-[14px] mt-5 max-md:text-[12px] lg:text-[18px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            لدينا خبرة واسعة تمتد لسنوات طويلة في مجال ترميم المباني، التشطيبات
            الداخلية والخارجية، بالإضافة إلى عزل الخزانات بأعلى معايير الجودة
            والكفاءة. نلتزم دائمًا بتقديم أفضل النتائج لتحقيق رضا عملائنا.
          </motion.p>
          <div className="flex justify-between mt-4">
            <div className="ml-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h1 className="font-bold text-[14px] lg:text-[20px]">200 +</h1>
                <h6 className="text-[9px] text-gray-600 max-md:text-[8px] lg:text-[12px]">
                  مشاريع ناجحة في مجال عزل الخزانات باستخدام أحدث التقنيات
                </h6>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h1 className="font-bold text-[14px] lg:text-[20px]">15 +</h1>
                <h6 className="text-[9px] text-gray-600 max-md:text-[8px] lg:text-[12px]">
                  سنوات من الخبرة في مجال الترميم والتشطيبات بمختلف أنواعها
                </h6>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h1 className="font-bold text-[14px] lg:text-[20px]">20 +</h1>
                <h6 className="text-[9px] text-gray-600 max-md:text-[8px] lg:text-[12px]">
                  فريق عمل متخصص ومؤهل لضمان جودة العمل ودقة التنفيذ{" "}
                </h6>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h1 className="font-bold text-[14px] lg:text-[20px]">20,000</h1>
                <h6 className="text-[9px] text-gray-600 max-md:text-[8px] lg:text-[12px]">
                  ساعات عمل مخصصة لإنهاء المشاريع بأعلى مستوى من الإتقان
                  والاحترافية
                </h6>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
