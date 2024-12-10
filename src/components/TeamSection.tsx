import { motion } from "framer-motion";
import square from "../../assets/square.png";
import ProfileCard from "./ProfileCard";

const TeamSection = () => {
  return (
    <section className="mt-10 h-[500px]">
      <div className="text-center mb-5">
        {/* Section Title with Animation */}
        <motion.h1
          className="text-xl font-bold lg:text-3xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          معرض الأعمال
        </motion.h1>

        <div className="flex items-center justify-around w-48 mx-auto lg:w-64">
          {/* Animated Horizontal Lines */}
          <motion.hr
            className="border border-[#FFC048] w-20 lg:w-32"
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          {/* Rotating Square Animation */}
          <motion.img
            src={square}
            alt="square image"
            className="w-5 rotate-45 lg:w-8"
            initial={{ rotate: 45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.hr
            className="border border-[#FFC048] w-20 lg:w-32"
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>
      </div>

      {/* Profile Card with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <ProfileCard />
      </motion.div>
    </section>
  );
};

export default TeamSection;
