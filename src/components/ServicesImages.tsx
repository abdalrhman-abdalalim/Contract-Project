import { motion } from "framer-motion";
import serviceImg1 from "../../assets/water-tank.png";
import serviceImg2 from "../../assets/constructionn.png";
import serviceImg3 from "../../assets/construction.png";

const ServicesImages = () => {
  return (
    <section className="flex justify-center">
      <div className="grid grid-cols-3 w-[90%] max-w-[1200px]">
        {/* Service 1 */}
        <motion.div
          className="w-full bg-white h-auto mt-[-100px] p-8 max-md:p-4 max-sm:p-3 max-xs2:p-2 border border-gray-100 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={serviceImg1}
            alt="experienced team"
            className="w-14 mx-auto max-sm:w-10 max-xs2:w-8"
          />
          <h1 className="text-center text-[16px] font-bold mt-2 max-md:text-[12px] max-sm:text-[10px] max-xs2:text-[8px]">
            عزل خزانات المياه
          </h1>
          <p className="text-[11px] text-center text-gray-600 mt-2 max-md:text-[9px] max-sm:text-[8px] max-xs2:text-[7px]">
            نقدم خدمات متخصصة في عزل خزانات المياه لضمان حماية كاملة من التسربات
            والحفاظ على جودة المياه. نستخدم أحدث التقنيات والمواد المبتكرة
            لتحقيق أعلى معايير الأمان والمتانة، مما يضمن عمرًا أطول للخزانات
            وسلامة المياه المخزنة.
          </p>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          className="w-full bg-white h-auto mt-[-130px] p-8 pt-[62px] max-md:p-4 max-sm:p-3 max-xs2:p-2 border border-gray-100 z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={serviceImg2}
            alt="experienced team"
            className="w-14 mx-auto max-sm:w-10 max-xs2:w-8"
          />
          <h1 className="text-center text-[16px] font-bold mt-2 max-md:text-[12px] max-sm:text-[10px] max-xs2:text-[8px]">
            ترميمات
          </h1>
          <p className="text-[11px] text-center text-gray-600 mt-2 max-md:text-[9px] max-sm:text-[8px] max-xs2:text-[7px]">
            نحن متخصصون في أعمال الترميم لإعادة المباني والمنشآت إلى حالتها
            المثالية. نعمل بدقة واحترافية لضمان جودة عالية، مع مراعاة التفاصيل
            لتحقيق نتائج ترضي تطلعات عملائنا وتعكس رؤيتهم.
          </p>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          className="w-full bg-white h-auto mt-[-100px] p-8 max-md:p-4 max-sm:p-3 max-xs2:p-2 border border-gray-100 mb-5 z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img
            src={serviceImg3}
            alt="experienced team"
            className="w-14 mx-auto max-sm:w-10 max-xs2:w-8"
          />
          <h1 className="text-center text-[16px] font-bold mt-2 max-md:text-[12px] max-sm:text-[10px] max-xs2:text-[8px]">
            تشطيبات
          </h1>
          <p className="text-[11px] text-center text-gray-600 mt-2 max-md:text-[9px] max-sm:text-[8px] max-xs2:text-[7px]">
            نقدم خدمات التشطيبات الداخلية والخارجية بأعلى معايير الجودة والدقة،
            لتلبية كافة احتياجات عملائنا. نحرص على تنفيذ تصميمات عصرية وأنيقة
            تضيف لمسة جمالية فريدة لمشاريعكم.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesImages;
