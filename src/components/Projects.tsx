// filepath: /home/suvan/git/portfolio/src/components/Projects.tsx
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    liveUrl?: string;
    repoUrl?: string;
}

function Project({ title, description, technologies, imageUrl, liveUrl, repoUrl }: ProjectProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            // viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-6 bg-[#1a1a1a] p-6 rounded-lg border hover:bg-[#2a2a2a] hover:border-[#4d4d4d] transition-all duration-300"
        >
            <div className="md:w-1/2">
                <div className="bg-[#2a2a2a] h-64 rounded-md flex items-center justify-center overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover shadow-lg"
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `<div class="flex items-center justify-center h-full w-full">
                                <span class="text-[#3b82f6] text-xl font-bold">${title}</span>
                            </div>`;
                        }}
                    />
                </div>
            </div>
            <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                    <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
                    <p className="text-white/70 mb-4">{description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-[#2d2d2d] text-white/80 text-xs px-3 py-1 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex gap-4">
                    {repoUrl && (
                        <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white/80 hover:text-[#3b82f6] transition-colors duration-300"
                        >
                            <Github size={18} />
                            <span>View Code</span>
                        </a>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white/80 hover:text-[#3b82f6] transition-colors duration-300"
                        >
                            <ExternalLink size={18} />
                            <span>Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const projects: ProjectProps[] = [
        {
            title: "Azzian",
            description: "A funny pixel game about an Asian boy who is chased around by slippers and constantly taunted by family, peers and the game itself.",
            technologies: ["Low Level Game Dev", "C", "RayLib"],
            imageUrl: "/portfolio/project-images/azzian.png",
            liveUrl: "https://github.com/codegasms/Azzian",
            repoUrl: "https://github.com/codegasms/Azzian",
        },
        {
            title: "Ray Tracing Engine",
            description: "A custom ray tracing engine built from scratch, capable of rendering complex scenes with realistic lighting and shadows.",
            technologies: ["C++", "C", "Computer Graphics"],
            imageUrl: "/portfolio/project-images/raytracer.png",
            liveUrl: "https://github.com/Suvansarkar/raytracer",
            repoUrl: "https://github.com/Suvansarkar/raytracer",
        },
        {
            title: "Garrulous",
            description: "Attention-Based Infinite Shakespeare Generator with Read-Aloud (TTS).",
            technologies: ["Machine Learning", "Python", "Natural Language Processing", "Deep Learning", "Text-to-speech"],
            imageUrl: "/portfolio/project-images/garrulous.png",
            liveUrl: "https://github.com/SahooBishwajeet/garrulous",
            repoUrl: "https://github.com/SahooBishwajeet/garrulous",
        }
    ];

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
                className='text-white text-3xl lg:text-5xl font-semibold'
            >
                Featured Projects
            </motion.div>
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
                className='text-white/60 max-w-3xl text-sm lg:text-base'
            >
                A showcase of my recent work, featuring web applications and digital solutions I've designed and developed.
            </motion.div>
            <div className="flex flex-col gap-8 mt-6">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    );
}