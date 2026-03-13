"use client";

import { motion } from "framer-motion";

/**
 * Infinite scrolling grid of feedback screenshots.
 * Reads all images from /images/feedbacks/ via a static list.
 * Images are displayed in 2 rows scrolling in opposite directions.
 *
 * To add new feedbacks: just drop .jpg/.png/.webp files into public/images/feedbacks/
 * and add the filename to the array below.
 */

const feedbackImages = [
  "feedback-1.jpg",
  "feedback-2.jpg",
  "feedback-3.jpg",
  "feedback-4.jpg",
  "feedback-5.jpg",
  "feedback-6.jpg",
  "feedback-7.jpg",
  "feedback-8.jpg",
  "feedback-9.jpg",
  "feedback-10.jpg",
  "feedback-11.jpg",
  "feedback-12.jpg",
];

function splitIntoRows(images: string[]): [string[], string[]] {
  const row1: string[] = [];
  const row2: string[] = [];
  images.forEach((img, i) => {
    if (i % 2 === 0) row1.push(img);
    else row2.push(img);
  });
  return [row1, row2];
}

function ScrollRow({
  images,
  direction,
  speed = 40,
}: {
  images: string[];
  direction: "left" | "right";
  speed?: number;
}) {
  // Double the images for seamless loop
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: direction === "left"
            ? [0, -(images.length * 340)]
            : [-(images.length * 340), 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {doubled.map((img, i) => (
          <div
            key={`${img}-${i}`}
            className="flex-shrink-0 rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.02] shadow-lg shadow-black/20 hover:border-accent/20 transition-colors"
            style={{ width: "320px" }}
          >
            <img
              src={`/images/feedbacks/${img}`}
              alt={`Feedback de usuário ${(i % images.length) + 1}`}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function FeedbackGrid() {
  const [row1, row2] = splitIntoRows(feedbackImages);

  return (
    <div className="w-screen -mx-6 lg:-mx-12 space-y-4 overflow-hidden">
      <ScrollRow images={row1} direction="left" speed={45} />
      <ScrollRow images={row2} direction="right" speed={50} />
    </div>
  );
}
