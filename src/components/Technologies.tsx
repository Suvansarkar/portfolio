import Tech from './Tech';
import { motion } from 'framer-motion';
import { useState } from 'react';
export default function Technologies() {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className="w-full py-20 px-8 flex flex-col gap-4">
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
                className='text-white text-3xl lg:text-5xl font-semibold'>Current Technologies</motion.div>
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
                className='text-white/60 max-w-3xl text-sm lg:text-base'>I'm proficient in a range of modern technologies that empower me to build highly functional solutions. These are some of my main technologies.</motion.div>
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
                className='flex flex-col gap-4 py-4'
            >
                <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    <Tech Title='TypeScript' Description='Type-safe JavaScript' ImagePath='./techstack/typescript.svg' backgroundColor='1a406c' />
                    <Tech Title='React JS' Description='UI component library' ImagePath='./techstack/react.svg' backgroundColor='193b44' />
                    <Tech Title='Node JS' Description='JavaScript runtime' ImagePath='./techstack/nodejs.svg' backgroundColor='315e2f' />
                    <Tech Title='TailwindCSS' Description='Utility-first CSS framework' ImagePath='./techstack/tailwind.svg' backgroundColor='266066' />
                    <Tech Title='Express Js' Description='Web framework for Node.js' ImagePath='./techstack/expressjs.svg' backgroundColor='4c4c4c' />
                    <Tech Title='Next JS' Description='React framework for SSR' ImagePath='./techstack/nextjs.svg' backgroundColor='656565' />
                    <Tech Title='Svelte' Description='Compiled frontend framework' ImagePath='./techstack/svelte.svg' backgroundColor='bf5827' />
                    <Tech Title='Nest JS' Description='Progressive Node.js framework' ImagePath='./techstack/nestjs.svg' backgroundColor='693248' />
                    <motion.div
                        // transition={{ duration: 0.5 }}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: showMore ? 1 : 0, height: showMore ? 'auto' : 0 }}
                        className={`grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:col-span-2 lg:col-span-3 xl:col-span-4 gap-4`}
                    >
                        <Tech Title='Git' Description='Version control system' ImagePath='./techstack/git.svg' backgroundColor='4e2e27' />
                        <Tech Title='Mongo DB' Description='NoSQL document database' ImagePath='./techstack/mongodb.svg' backgroundColor='36482b' />
                        <Tech Title='Prisma ORM' Description='Next-gen database toolkit' ImagePath='./techstack/prisma.svg' backgroundColor='186997' />
                        <Tech Title='PostgreSQL' Description='Relational database' ImagePath='./techstack/postgres.svg' backgroundColor='1a406c' />
                        <Tech Title='Flutter' Description='Cross-platform UI toolkit' ImagePath='./techstack/flutter.svg' backgroundColor='1a406c' />
                        <Tech Title='Dart' Description='Client-optimized language' ImagePath='./techstack/dart.svg' backgroundColor='005680' />
                        <Tech Title='Python' Description='General-purpose language' ImagePath='./techstack/python.svg' backgroundColor='1b5381' />
                        <Tech Title='C++' Description='High-performance language' ImagePath='./techstack/cpp.svg' backgroundColor='1a406c' />
                        <Tech Title='Docker' Description='Container platform' ImagePath='./techstack/docker.svg' backgroundColor='1a406c' />
                    </motion.div>
                </div>

                {/* View More/Less Button */}
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="mx-auto mt-4 px-6 py-2 bg-[#3b82f6]/10 text-[#3b82f6] rounded-md border border-[#3b82f6]/30 hover:bg-[#3b82f6]/20 transition-all duration-300 cursor-pointer z-10"
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ delay: 0.3 }}
                >
                    {showMore ? 'View Less' : 'View More'}
                </button>
            </motion.div>
        </div>
    );
}