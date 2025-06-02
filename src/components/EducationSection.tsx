import { education } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import { IconAward, IconBuildingBank, IconMapPin, IconSchool } from "@tabler/icons-react";

export default function EducationSection() {
  return (
    <section
      id="educación"
      className="py-12 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="flex text-2xl font-bold mb-8 text-center md:text-left">
            <IconSchool className="h-7 w-7 mr-1 pt-1" stroke={1.5} /> Educación
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.institution}
              iconTitle={<IconSchool className="h-5 w-5 inline-block" />}
              title={`${edu.degree}`}
              iconSubtitle={<IconBuildingBank className="h-4 w-4 inline-block mr-1" />}
              subtitle={`${edu.institution}`}
              date={`${edu.period}`}
              isLast={index === education.length - 1}
              index={index}
            >
              <p className="flex text-sm text-muted-foreground mb-3">
                <IconMapPin className="h-4 w-4 inline-block mr-1" /> {edu.location}
              </p>

              {edu.achievements && edu.achievements.length > 0 && (
                <motion.div
                  className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-blue-500/20 dark:bg-card/10 dark:border-blue-500/10 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-3">
                    <div className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-500/10 mr-2">
                      <IconAward className="h-4 w-4 text-blue-500" />
                    </div>
                    <h4 className="text-sm font-medium">
                      Achievements & Activities
                    </h4>
                  </div>
                  <ul className="list-none ml-4 space-y-2 text-sm">
                    {edu.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground relative pl-6"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
