import { motion } from "framer-motion";

import { styles } from "../styles";
import { PlanesCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' /> {/*This creates the purple dot */}
          <div className='w-1 sm:h-80 h-40 violet-gradient' /> {/*This creates the purple line*/}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Daniel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm learning to <br className='sm:block hidden' /> 
            <span className='text-[#915EFF]'>develop AI applications
              </span>
            {/*This is a conditional breakline for small devices: <br className='sm:block hidden' /> */}
          </p>
        </div>
        
      </div>
      <PlanesCanvas />
      
    </section>
    
  );
};

export default Hero;