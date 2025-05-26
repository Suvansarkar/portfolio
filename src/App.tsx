import { Download } from 'lucide-react';
import './App.css';
import Tech from './components/Tech';
import { BackgroundBeams } from './components/Beams';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 800);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobileView) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-black text-2xl">Please view this site on a desktop or laptop for the best experience. Mobile view is still being worked on.</div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed top-0 left-0 h-full w-full -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#0a0a0a] bg-[radial-gradient(#141619_1px,#0a0a0a_1px)] bg-[size:20px_20px]">
        </div>
      </div>
      <div className='max-w-7xl mx-auto '>
        <div className="w-full flex flex-col items-center min-h-screen justify-center">
          <div className="flex items-center justify-center flex-col gap-6 w-[800px]">
            <motion.div initial={{ y: "-100px", opacity: 0, filter: "blur(10px)" }} animate={{ y: "0", opacity: 1, filter: "blur(0px)" }} transition={{ duration: "0.5", ease: "backOut" }} className="text-gray-300 font-semibold">BASED IN BANGALORE</motion.div>
            <h1 className="text-7xl text-white font-bold text-center" >
              <motion.span initial={{ filter: "blur(20px)", opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1 }} transition={{ delay: 0, ease: "easeInOut" }}>Innovation </motion.span>
              <motion.span initial={{ filter: "blur(20px)", opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1 }} transition={{ delay: 0.25, ease: "easeInOut" }}>In </motion.span>
              <motion.span initial={{ filter: "blur(20px)", opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1 }} transition={{ delay: 0.5, ease: "easeInOut" }}>Every </motion.span>
              <motion.span className='text-[#3b82f6]' initial={{ filter: "blur(20px)", opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1 }} transition={{ delay: 0.75, ease: "easeInOut" }}>Pixel </motion.span>
              <motion.span className='text-[#3b82f6]' initial={{ filter: "blur(20px)", opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1 }} transition={{ delay: 1, ease: "easeInOut" }}>& </motion.span>
              <motion.span className='text-[#3b82f6]' initial={{ filter: "blur(20px)", opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1 }} transition={{ delay: 1.25, ease: "easeInOut" }}>Pipeline</motion.span>
              <motion.span initial={{ filter: "blur(20px)", opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1 }} transition={{ delay: 1.25, ease: "easeInOut" }}>.</motion.span>
            </h1>
            <motion.div initial={{ y: "50px", opacity: 0, filter: "blur(10px)" }} animate={{ y: "0", opacity: 1, filter: "blur(0px)" }} transition={{ duration: "0.5", ease: "backOut" }} className="text-gray-300 text-center pb-6">Hi, I'm Suvan Sarkar — I architect scalable and efficient web applications with seamless backend logic and clean, intuitive user experiences.</motion.div>
            <motion.div initial={{ y: "50px", opacity: 0, filter: "blur(10px)" }} animate={{ y: "0", opacity: 1, filter: "blur(0px)" }} transition={{ duration: "0.5", ease: "backOut" }} className='flex items-center justify-center gap-12'>
              <div className="container_button">
                <a href="https://github.com/Suvansarkar" className="button type--B">
                  <div className="button__line"></div>
                  <div className="button__line"></div>
                  <span className="button__text">SEE MY WORK</span>
                  <div className="button__drow1"></div>
                  <div className="button__drow2"></div>
                </a>
              </div>
              <a href='/Suvan2025.pdf' download="SuvanSarkar_CV.pdf">
                <div className='text-white flex gap-3 text-xl items-center cursor-pointer hover:text-gray-300 transition-all duration-300'>
                  <Download className='text-[#3b82f6]' />
                  <span className='text-nowrap'> Download CV</span>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full py-20 flex flex-col gap-4">
          <motion.div
            initial={{
              opacity: 0,
              x: "-100px",
              filter: "blur(10px)"
            }}
            whileInView={{
              opacity: 1,
              x: "0",
              filter: "blur(0px)"
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='text-white text-5xl font-semibold'>Current Technologies</motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: "-100px",
              filter: "blur(10px)"
            }}
            whileInView={{
              opacity: 1,
              x: "0",
              filter: "blur(0px)"
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='text-white/60 max-w-3xl text-base'>I'm proficient in a range of modern technologies that empower me to build highly functional solutions. These are some of my main technologies.</motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: "100px",
            }}
            whileInView={{
              opacity: 1,
              y: "0",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='grid grid-cols-4 gap-4 py-4'>
            <Tech Title='TypeScript' Description='Type-safe JavaScript' ImagePath='./techstack/typescript.svg' backgroundColor='1a406c' />
            <Tech Title='Node JS' Description='JavaScript runtime' ImagePath='./techstack/nodejs.svg' backgroundColor='315e2f' />
            <Tech Title='Express Js' Description='Web framework for Node.js' ImagePath='./techstack/expressjs.svg' backgroundColor='4c4c4c' />
            <Tech Title='React JS' Description='UI component library' ImagePath='./techstack/react.svg' backgroundColor='193b44' />
            <Tech Title='Next JS' Description='React framework for SSR' ImagePath='./techstack/nextjs.svg' backgroundColor='656565' />
            <Tech Title='Svelte' Description='Compiled frontend framework' ImagePath='./techstack/svelte.svg' backgroundColor='bf5827' />
            <Tech Title='Nest JS' Description='Progressive Node.js framework' ImagePath='./techstack/nestjs.svg' backgroundColor='693248' />
            <Tech Title='Git' Description='Version control system' ImagePath='./techstack/git.svg' backgroundColor='4e2e27' />
            <Tech Title='Mongo DB' Description='NoSQL document database' ImagePath='./techstack/mongodb.svg' backgroundColor='36482b' />
            <Tech Title='Prisma ORM' Description='Next-gen database toolkit' ImagePath='./techstack/prisma.svg' backgroundColor='186997' />
            <Tech Title='PostgreSQL' Description='Relational database' ImagePath='./techstack/postgres.svg' backgroundColor='1a406c' />
            <Tech Title='TailwindCSS' Description='Utility-first CSS framework' ImagePath='./techstack/tailwind.svg' backgroundColor='266066' />
            <Tech Title='Flutter' Description='Cross-platform UI toolkit' ImagePath='./techstack/flutter.svg' backgroundColor='1a406c' />
            <Tech Title='Dart' Description='Client-optimized language' ImagePath='./techstack/dart.svg' backgroundColor='005680' />
            <Tech Title='Python' Description='General-purpose language' ImagePath='./techstack/python.svg' backgroundColor='1b5381' />
            <Tech Title='C++' Description='High-performance language' ImagePath='./techstack/cpp.svg' backgroundColor='1a406c' />
            <Tech Title='Docker' Description='Container platform' ImagePath='./techstack/docker.svg' backgroundColor='1a406c' />
          </motion.div>
        </div>
        <div className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col antialiased border-2 border-white/10 my-10">
          <div className='w-full border-b-2 border-white/10 text-white p-12 font-bold z-10 flex flex-col gap-12 pb-20'>
            <div>
              <div className='text-5xl'>Like what you see? Reach</div>
              <div className='text-5xl'>out <a className='text-[#3a7eed] underline cursor-pointer' href='mailto:suvansarkar1@gmail.com'>via email</a> to collaborate!</div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center w-fit">
                <a href="mailto:suvansarkar1@gmail.com" className="button type--B">
                  <div className="button__line"></div>
                  <div className="button__line"></div>
                  <span className="button__text">EMAIL ME</span>
                  <div className="button__drow1"></div>
                  <div className="button__drow2"></div>
                </a>
              </div>
            </div>
          </div>
          <div className='flex justify-between w-full p-8 px-12'>
            <div className='flex flex-col gap-2'>
              <div className='text-white text-2xl font-semibold'>Suvan Sarkar</div>
              <div className='text-white/60 text-sm'> © 2025 | All rights reserved</div>
            </div>
            <div className='flex flex-col gap-2 z-10'>
              <div className='text-white text-xl font-semibold'>Socials</div>
              <a className='text-white/60 hover:text-white transition-all duration-300' href='https://www.linkedin.com/in/suvan-sarkar-b1438017a/'>LinkedIn</a>
              <a className='text-white/60  hover:text-white transition-all duration-300'>Twitter</a>
              <a className='text-white/60 hover:text-white transition-all duration-300' href='https://www.github.com/Suvansarkar'>Github</a>
              <a className='text-white/60  hover:text-white transition-all duration-300'>Instagram</a>
            </div>
          </div>
          <BackgroundBeams />
        </div>
      </div >

    </>
  )
}

export default App
