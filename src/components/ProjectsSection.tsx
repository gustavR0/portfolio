import { projects } from "@/lib/data";
import { CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import { IconBrandGithub, IconRocket, IconWorldWww } from "@tabler/icons-react";

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="flex text-2xl font-bold mb-8 text-center md:text-left">
            <IconRocket className="h-7 w-7 mr-1 pt-1" stroke={1.5} /> Proyectos
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.2}>
              <GlassCard className="group overflow-hidden dark:border-blue-500/10 h-full flex flex-col">
                <CardHeader className="bg-gradient-to-r from-blue-500/5 to-sky-500/5">
                  <CardTitle className="text-center md:text-left group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc ml-4 space-y-1 text-sm group-hover:space-y-2 transition-all duration-300">
                    {project.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {desc}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center md:justify-start items-center border-t border-border/30 bg-gradient-to-r from-blue-500/5 to-sky-500/5 gap-2">
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-blue-500 transition-colors group/link pt-8"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconWorldWww className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                      Live Demo
                    </motion.a>
                  )}

                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-blue-500 transition-colors group/link pt-8"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconBrandGithub className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                      Frontend
                    </motion.a>
                  )}
                  {project.githubBack && (
                    <motion.a
                      href={project.githubBack}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-blue-500 transition-colors group/link pt-8"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconBrandGithub className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                      Backend
                    </motion.a>
                  )}
                  {project.githubRepo && (
                    <motion.a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-blue-500 transition-colors group/link pt-8"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconBrandGithub className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                      Repo
                    </motion.a>
                  )}
                </CardFooter>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
