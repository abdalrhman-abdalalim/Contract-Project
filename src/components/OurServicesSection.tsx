import { motion } from "framer-motion";
import qualityServices1 from "../../assets/renovation.png";
import qualityServices2 from "../../assets/interior-design.png";
import qualityServices3 from "../../assets/workers.png";
import qualityServices4 from "../../assets/insulation.png";
import qualityServices5 from "../../assets/property.png";
import qualityServices6 from "../../assets/restore.png";
import square from "../../assets/square.png";
import "../styles/service.css";

const OurServicesSection = () => {
  const services = [
    {
      src: qualityServices1,
      title: "تجديد",
      description: "نقوم بتجديد المباني لجعلها أكثر حداثة، عملية، وجاذبية.",
    },
    {
      src: qualityServices2,
      title: "تصميم داخلي",
      description: "تصميمات داخلية متكاملة تلبي احتياجاتك وتعكس ذوقك الخاص.",
    },
    {
      src: qualityServices3,
      title: "بناء وصيانة",
      description: "خدمات بناء وصيانة لضمان سلامة واستدامة منشآتك.",
    },
    {
      src: qualityServices4,
      title: "عزل",
      description: "حلول عزل متقدمة للحفاظ على الحرارة وتقليل استهلاك الطاقة.",
    },
    {
      src: qualityServices5,
      title: "تشطيبات",
      description: "تشطيبات راقية تُضفي لمسة فاخرة على مشاريعك.",
    },
    {
      src: qualityServices6,
      title: "ترميم",
      description: "ترميم المباني للحفاظ على جمالها وزيادة عمرها الافتراضي.",
    },
  ];

  return (
    <section className="-mt-14">
      <div className="text-center">
        <motion.h1
          className="text-xl font-bold lg:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          خدمات ذات جودة عالية
        </motion.h1>
        <div className="flex items-center justify-around w-48 mx-auto lg:w-64">
          <motion.hr
            className="border border-[#FFC048] w-20 lg:w-32"
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src={square}
            alt="square image"
            className="w-5 rotate-45 lg:w-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.hr
            className="border border-[#FFC048] w-20 lg:w-32"
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-3 max-sm:grid-cols-1 lg:gap-8 mt-5">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="ag-offer_item p-5 rounded-lg shadow-md h-fit lg:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="ag-offer_visible-item">
              <div className="ag-offer_img-box">
                <motion.img
                  src={service.src}
                  alt={service.title}
                  className="w-10 mx-auto lg:w-16 ag-offer_img"
                />
              </div>
              <motion.h1
                className="ag-offer_title text-center text-[15px] font-bold mt-1 lg:text-[18px] lg:mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {service.title}
              </motion.h1>
            </div>
            <div className="ag-offer_hidden-item">
              <motion.p
                className=" ag-offer_text text-[10px] font-bold text-center mt-3 lg:text-[14px] lg:mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {service.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServicesSection;

{
  /* <motion.div
  key={index}
  className="p-5 bg-white rounded-lg shadow-md h-fit lg:p-8 serviceImage"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.2 }}
>
  <img src={service.src} alt={service.title} className="w-10 mx-auto lg:w-16" />
  <motion.h1
    className="text-center text-[12px] font-bold mt-1 lg:text-[18px] lg:mt-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    {service.title}
  </motion.h1>
  <motion.p
    className="text-[10px] font-bold text-center mt-3 lg:text-[14px] lg:mt-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    {service.description}
  </motion.p>
</motion.div>; */
}
