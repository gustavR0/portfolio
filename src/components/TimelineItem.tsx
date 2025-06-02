import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconCalendar, IconDeviceLaptop, IconWorld } from "@tabler/icons-react";

interface TimelineItemProps {
  iconTitle?: React.ReactNode;
  iconSubtitle?: React.ReactNode;
  title: string;
  subtitle: string;
  date: string;
  isLast?: boolean;
  index?: number;
  children?: React.ReactNode;
}

export default function TimelineItem({
  title,
  iconTitle,
  iconSubtitle,
  subtitle,
  date,
  isLast = false,
  index = 0,
  children,
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative flex gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-col items-center pb-1">
        <motion.div
          className="flex h-[18px] w-[18px] rounded-full border border-blue-500/50 bg-background dark:bg-muted z-10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: index * 0.2 + 0.2,
          }}
          viewport={{ once: true, margin: "-50px" }}
        />
        {!isLast && (
          <motion.div
            className="w-px grow bg-gradient-to-b from-blue-500/50 to-sky-500/30 dark:from-blue-500/30 dark:to-sky-500/10"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          />
        )}
      </div>
      <div className={cn("pb-8", isLast ? "pb-0" : "")}>
        <motion.div
          className="flex flex-col gap-0.5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex ">
            {iconTitle}
            <h3 className="font-medium">{title}</h3>
          </div>
          <div className="flex">
            {iconSubtitle}
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
          <div className="flex">
            <IconCalendar className="h-4 w-4 inline-block mr-1" />
            <p className="text-xs text-muted-foreground/70 mb-2">{date}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
