import { motion } from "framer-motion";
import "./MouseScroll.css";

export default function MouseScroll() {
  return (
    <div className="mouse-scroll-container" aria-hidden="true">
      <motion.svg
        className="mouse-svg"
        width="46"
        height="60"
        viewBox="0 0 36 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* outline: pill-shaped mouse path */}
        <motion.path
          d="M18 3
             C23.075 3 27 6.925 27 12
             V36
             C27 41.075 23.075 45 18 45
             C12.925 45 9 41.075 9 36
             V12
             C9 6.925 12.925 3 18 3 Z"
          stroke="#3ABFF8" /* fallback color */
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 1.2, ease: "easeInOut" },
            opacity: { duration: 0.6, ease: "easeInOut" }
          }}
          className="mouse-path"
        />

        {/* inner wheel / indicator */}
        <motion.circle
          className="mouse-wheel"
          cx="18"
          cy="15"
          r="2.5"
          fill="var(--color-primary)"
          initial={{ opacity: 0 }}
          animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2
          }}
        />
      </motion.svg>
    </div>
  );
}
