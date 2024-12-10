import { PhotoService } from "../data/indext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProfileCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PhotoService.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + PhotoService.length) % PhotoService.length
    );
  };

  const getVisibleItems = () => {
    const start =
      currentIndex - 1 < 0 ? PhotoService.length - 1 : currentIndex - 1;
    const end = (currentIndex + 1) % PhotoService.length;

    if (start < end) {
      return PhotoService.slice(start, end + 1);
    } else {
      return [...PhotoService.slice(start), ...PhotoService.slice(0, end + 1)];
    }
  };

  const visibleItems = getVisibleItems();

  return (
    <div id="gallery" className=" w-full flex flex-col items-center relative">
      <div className="relative h-[400px] md:h-[450px] flex overflow-hidden rounded-lg">
        <AnimatePresence initial={false}>
          {visibleItems.map((photo, index) => (
            <motion.div
              key={photo.itemImageSrc}
              className={`flex-none w-full h-[400px] sm:w-1/3 flex justify-center  items-center px-2 ${
                index === 1 ? "z-10" : ""
              }`}
              initial={{ opacity: 0, scale: 0.8, x: index === 0 ? -50 : 50 }}
              animate={{
                opacity: 1,
                scale: index === 1 ? 1.1 : 0.9,
                x: 0,
              }}
              exit={{ opacity: 0, scale: 0.8, x: index === 0 ? -50 : 50 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={photo.itemImageSrc}
                className="block w-full h-auto rounded-lg"
                alt={photo.alt}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-4 flex w-40 justify-between">
        <motion.button
          type="button"
          className=" bg-[#FFC048] p-2 rounded-md shadow-md shadow-gray-500"
          onClick={handlePrev}
          whileTap={{ scale: 0.9 }}
          whileHover={{ backgroundColor: "#FFD369" }}
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </motion.button>
        <motion.button
          type="button"
          className="bg-[#FFC048] p-2 rounded-md shadow-md shadow-gray-500"
          onClick={handleNext}
          whileTap={{ scale: 0.9 }}
          whileHover={{ backgroundColor: "#FFD369" }}
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </motion.button>
      </div>
    </div>
  );
}
