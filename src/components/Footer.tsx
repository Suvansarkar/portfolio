import { BackgroundBeams } from './Beams';

export default function Footer() {
    return (
        <div className='w-full h-full px-8'>
            <div className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col antialiased border-2 border-white/10 my-10">
                <div className='w-full border-b-2 border-white/10 text-white p-8 md:p-12 font-bold z-10 flex flex-col gap-12 pb-10 md:pb-20'>
                    <div>
                        <div className='text-3xl md:text-5xl'>Like what you see? Reach</div>
                        <div className='text-3xl md:text-5xl'>out <a className='text-[#3a7eed] underline cursor-pointer' href='mailto:suvansarkar1@gmail.com'>via email</a> to collaborate!</div>
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
                <div className='flex flex-col gap-4 sm:flex-row justify-between w-full p-8 px-12'>
                    <div className='flex flex-col gap-2'>
                        <div className='text-white text-xl md:text-2xl font-semibold'>Suvan Sarkar</div>
                        <div className='text-white/60 text-xs md:text-sm'> © 2025 | All rights reserved</div>
                    </div>
                    <div className='flex flex-col gap-2 z-10'>
                        <div className='text-white text-lg md:text-xl font-semibold'>Socials</div>
                        <a className='text-white/60 hover:text-white transition-all duration-300 text-sm md:text-base' href='https://www.linkedin.com/in/suvan-sarkar-b1438017a/'>LinkedIn</a>
                        <a className='text-white/60  hover:text-white transition-all duration-300 text-sm md:text-base'>Twitter</a>
                        <a className='text-white/60 hover:text-white transition-all duration-300 text-sm md:text-base' href='https://www.github.com/Suvansarkar'>Github</a>
                        <a className='text-white/60  hover:text-white transition-all duration-300 text-sm md:text-base'>Instagram</a>
                    </div>
                </div>
                <BackgroundBeams />
            </div>
        </div>
    )
}