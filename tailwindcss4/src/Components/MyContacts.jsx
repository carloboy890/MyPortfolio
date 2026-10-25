import React from "react";
import { motion } from "framer-motion";
import ContactDesc from "./ContactDesc";
import ContactInfos from "./ContactInfos";
import EmailSending from "./EmailSending";

function MyContacts() {
  return (
    <div
      className="relative h-full w-full
    max-sm:pt-10 max-sm:space-y-5"
    >
      <div
        className="h-[20%] w-full flex justify-center items-center flex-col border-1 pt-10
      max-sm:space-y-2"
      >
        <motion.div
          className="text-[4rem] font-Jost font-bold 
          max-lg:text-[2.5rem]
          max-md:text-[2rem]
          max-sm:text-[1.3rem]"
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Let's Create Something{" "}
          <span
            className="
                bg-gradient-to-r
                from-white
                to-cyan-400
                bg-clip-text
                text-transparent font-bold "
          >
            Amazing
          </span>
        </motion.div>
        <motion.div
          className="text-2xl 
          max-lg:text-[0.9rem]
          max-md:text-[0.7rem]
          max-sm:text-[0.5rem]"
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Have an idea, a project, or just want to connect? I'd love to hear
          from you.
        </motion.div>
      </div>
      <div className="h-[80%] flex max-sm:p-1 max-sm:flex-col-reverse">
        <div
          className="h-full w-[40%] p-17 space-y-7
        max-2xl:p-13
         max-xl:p-4
         max-md:p-2
         max-sm:h-[90%] max-sm:w-full max-sm:justify-center max-sm:p-3"
        >
          <div
            className="h-[80%] rounded-2xl p-8 space-y-5 bg-gray-900 
          max-lg:p-3 max-lg:space-y-4
          max-md:p-0 max-md:pt-4 max-sm:p-8 max-sm:space-y-6 "
          >
            <motion.div
              className="text-3xl ml-5 font-bold 
              max-lg:text-3xl
              max-sm:text-center max-sm:ml-0"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Contact Information
            </motion.div>
            <div
              className="p-3 space-y-4 h-[85%]
              max-lg:space-y-4
              max-md:space-y-2
              max-sm:p-0 max-sm:space-y-4
            "
            >
              {ContactDesc.map((value) => {
                return (
                  <ContactInfos
                    key={value.id}
                    title={value.title}
                    logo={value.logo}
                    description={value.description}
                  />
                );
              })}
            </div>
          </div>
          <div
            className="h-[15%] flex rounded-2xl bg-gray-900 justify-around items-center
          max-sm:h-[30%]"
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <div
                className="text-4xl bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent font-bold 
              max-md:text-3xl max-sm:text-3xl"
              >
                5+
              </div>
              <div
                className="text-[0.85rem]
              max-sm:text-[0.8rem]"
              >
                Projects
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <div
                className="text-4xl bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent font-bold
                max-md:text-3xl max-sm:text-3xl"
              >
                100%
              </div>
              <div
                className="text-[0.85rem]
              max-sm:text-[0.8rem]"
              >
                Satisfaction
              </div>
            </motion.div>
          </div>
        </div>
        <div
          className="relative h-full w-[60%] p-17
        max-2xl:p-13
        max-xl:p-4
        max-md:p-1
        max-sm:h-auto max-sm:w-full max-sm:p-3
        "
        >
          <div className=" h-full w-full bg-gray-900 rounded-2xl max-sm:p-8">
            <EmailSending />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyContacts;
