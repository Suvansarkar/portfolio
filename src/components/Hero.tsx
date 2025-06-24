import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <div className="w-full flex flex-col items-center min-h-screen justify-center">
            <div className="flex items-center justify-center flex-col gap-6 max-w-[800px] w-full px-8">
                <motion.div initial={{ y: "-100px", opacity: 0, filter: "blur(10px)" }} animate={{ y: "0", opacity: 1, filter: "blur(0px)" }} transition={{ duration: "0.5", ease: "backOut" }} className="text-gray-300 font-semibold">BASED IN BANGALORE</motion.div>
                <h1 className="text-5xl lg:text-7xl text-white font-bold text-center" >
                    <motion.span initial={{ filter: "blur(20px)", opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1 }} transition={{ delay: 0, ease: "easeInOut" }}>Innovation </motion.span>
                    <motion.span initial={{ filter: "blur(20px)", opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1 }} transition={{ delay: 0.25, ease: "easeInOut" }}>In </motion.span>
                    <motion.span initial={{ filter: "blur(20px)", opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1 }} transition={{ delay: 0.5, ease: "easeInOut" }}>Every </motion.span>
                    <motion.span className='text-[#3b82f6]' initial={{ filter: "blur(20px)", opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1 }} transition={{ delay: 0.75, ease: "easeInOut" }}>Pixel </motion.span>
                    <motion.span className='text-[#3b82f6]' initial={{ filter: "blur(20px)", opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1 }} transition={{ delay: 1, ease: "easeInOut" }}>& </motion.span>
                    <motion.span className='text-[#3b82f6]' initial={{ filter: "blur(20px)", opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1 }} transition={{ delay: 1.25, ease: "easeInOut" }}>Pipeline</motion.span>
                    <motion.span initial={{ filter: "blur(20px)", opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1 }} transition={{ delay: 1.25, ease: "easeInOut" }}>.</motion.span>
                </h1>
                <motion.div
                    initial={{ y: "50px", opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: "0", opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: "0.5", ease: "backOut" }}
                    className="text-gray-300 text-center pb-6 text-sm lg:text-base"
                >
                    Hi, I'm Suvan Sarkar — I architect scalable and efficient web applications with seamless backend logic and clean, intuitive user experiences.
                </motion.div>
                <motion.div
                    initial={{ y: "50px", opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: "0", opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: "0.5", ease: "backOut" }}
                    className='flex flex-col md:flex-row items-center justify-center gap-12'
                >
                    <div className="container_button">
                        <a href="https://github.com/Suvansarkar" className="button type--B">
                            <div className="button__line"></div>
                            <div className="button__line"></div>
                            <span className="button__text">SEE MY WORK</span>
                            <div className="button__drow1"></div>
                            <div className="button__drow2"></div>
                        </a>
                    </div>
                    <a href='/portfolio/Suvan2025.pdf' download="SuvanSarkar_CV.pdf">
                        <div className='text-white flex gap-3 text-base lg:text-xl items-center cursor-pointer hover:text-gray-300 transition-all duration-300'>
                            <Download className='text-[#3b82f6]' />
                            <span className='text-nowrap'> Download CV</span>
                        </div>
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;