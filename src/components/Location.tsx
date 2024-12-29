import { FormEvent, useRef, useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs
import  { motion } from "framer-motion"; // Import Framer Motion for animations



const Location = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  // Handle input changes
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handle form submission
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!form.current) {
      console.error("Form is not assigned");
      return;
    }
    emailjs
      .sendForm(
        "service_ht63dnp",
        "template_imbzebk",
        form.current,
        "NgFIVVkzIgnhEBitM"
      )
      .then(
        () => {
          setFormValues({ user_name: "", user_email: "", message: "" }); // Reset form
        }
      );
  };

  return (
    <section className="grid w-full grid-cols-2 gap-10 mt-10 max-md:grid-cols-1">
      <div className="px-10 mx-4">
        <div className="mb-7">
          <motion.h1
            className="text-3xl font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            تواصل معنا
          </motion.h1>
          <motion.p
            className="mt-2 text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            اترك لنا رسالة
          </motion.p>
        </div>
        <form ref={form} onSubmit={onSubmitHandler}>
          <motion.div
            className="relative z-0 w-full mb-5 group"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <input
              type="text"
              name="user_name"
              id="user_name"
              value={formValues.user_name}
              onChange={onChangeHandler}
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="user_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              أدخل اسمك
            </label>
          </motion.div>

          <motion.div
            className="relative z-0 w-full mb-5 group"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <input
              type="email"
              name="user_email"
              id="user_email"
              value={formValues.user_email}
              onChange={onChangeHandler}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="user_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              أدخل بريدك الإلكتروني
            </label>
          </motion.div>

          <motion.div
            className="relative z-0 w-full mb-5 group"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
          >
            <input
              type="text"
              name="message"
              id="message"
              value={formValues.message}
              onChange={onChangeHandler}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              أدخل رسالتك
            </label>
          </motion.div>

          <motion.button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
          >
            إرسال
          </motion.button>
        </form>
      </div>

      <motion.div
        className="w-full px-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <iframe
          width="100%"
          height="400"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Saudi%20Arabia+(My%20company%20location)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Location Map"
        >
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>
      </motion.div>
    </section>
  );
};

export default Location;
