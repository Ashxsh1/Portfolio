import { motion } from "framer-motion";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

import myImage from "../components/Ashh_img.jpg";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Ashish Gidijala</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am a Full stack Web Developer <br className='sm:block hidden' />
          and a ML Enthusiast
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='flex flex-col items-center mt-5'>
  <div className='w-80 h-auto mt-80 z-10 rounded-lg border border-purple-500 p-2 shadow-lg'>
    <img src={myImage} alt="My Image" className='w-full h-full rounded-lg' />
  </div>
</div>


      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
