// ============================================================
// OMAIR SPORTS FLOORING — Shared Animation Variants
// ============================================================

export const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

export const fadeLeft = {
  hidden:  { opacity: 0, x: -50 },
  visible: (delay = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export const fadeRight = {
  hidden:  { opacity: 0, x: 50 },
  visible: (delay = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: (delay = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

// Stagger container
export const staggerContainer = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// Stagger item
export const staggerItem = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

// Card hover spring
export const cardHover = {
  rest:  { y: 0,  scale: 1,    boxShadow: "0 4px 20px rgba(10,31,68,0.06)" },
  hover: { y: -6, scale: 1.02, boxShadow: "0 20px 60px rgba(10,31,68,0.18)" },
};

export const cardHoverTransition = {
  type: "spring", stiffness: 300, damping: 20,
};
