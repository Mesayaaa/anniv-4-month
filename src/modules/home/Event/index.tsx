"use client";

import { GoDotFill } from "react-icons/go";
import { IoCalendarClearOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import { PiMapPin } from "react-icons/pi";
import { motion, Variants } from "framer-motion";

const bluryEffect: Variants = {
  initial: {
    opacity: 0,
    filter: "blur(10px)",
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    filter: "blur(0)",
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

const fadeIn: Variants = {
  initial: {
    opacity: 0,
    y: "40px",
  },
  animate: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      delay,
    },
  }),
};

const stagger: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2,
      staggerChildren: 1,
      type: "spring",
    },
  },
};

const anim = (variants: Variants) => ({
  variants,
  initial: "initial",
  whileInView: "animate",
  viewport: {
    once: true,
  },
});

export default function Event() {
  return (
    <section
      className="container-box2 mt-betweenSectionMd 
        xl:mt-betweenSection flex flex-col md:flex-row justify-between gap-14 md:gap-4"
    >
      <div>
        <motion.h2
          className="heading-4 md:heading-3 xl:heading-2 font-dancing-script font-bold px-4 md:px-0"
          {...anim(bluryEffect)}
        >
          Pesan kecil buat kamu
        </motion.h2>
        <motion.p
          className="mt-5 max-w-xl px-4 text-sm md:px-0 md:text-base font-roboto-slab"
          {...anim(fadeIn)}
          custom={0.2}
        >
          Besok genap empat bulan kita. Tidak perlu acara besar, cukup luangkan
          waktu buat ngobrol, ketemu, dan bikin satu momen baru bareng.
        </motion.p>
      </div>
    </section>
  );
}

const Li = ({
  delay,
  children,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  const variants: Variants = {
    initial: {
      opacity: 0,
      x: "-50px",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay,
        type: "spring",
        bounce: 0,
      },
    },
  };

  return (
    <motion.li className="flex items-start gap-4 md:gap-6" {...anim(variants)}>
      {children}
    </motion.li>
  );
};
