import { type Variants } from "framer-motion";
import * as Motion from "@/components/Motion";

import ProgressiveImage from "@/components/ProgressiveImage";
import { assetPath } from "@/lib/assetPath";

const variants: Variants = {
  initial: {
    opacity: 0,
    y: "40px",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const anim = ({ duration, delay }: { duration: number; delay: number }) => ({
  variants: variants,
  initial: "initial",
  whileInView: "animate",
  viewport: {
    once: true,
    margin: "-20%",
  },
  transition: {
    duration,
    type: "spring",
    delay,
  },
});

export default function Profile() {
  return (
    <section className="container-box2 mt-24 md:mt-betweenSectionMd xl:mt-betweenSection grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-3 xl:gap-0">
      <div className="order-none md:order-1 flex flex-col justify-center items-center space-y-5 xl:space-y-7">
        <Motion.Box
          className="text-center space-y-5 md:space-y-7"
          {...anim({ duration: 1, delay: 0.2 })}
        >
          <h3 className="heading-4 md:heading-3 font-dancing-script font-bold">
            Mesaya
          </h3>
          <div className="space-y-2">
            <p className="text-xs md:text-sm font-roboto-slab">
              si ganteng dari goa hantu
            </p>
            <p className="text-sm md:text-base font-roboto-slab">
              cowo paling mantep
            </p>
          </div>
        </Motion.Box>
        <Motion.Heading
          className="heading-4 md:heading-3 font-dancing-script font-bold"
          {...anim({ duration: 1, delay: 0.3 })}
        >
          &
        </Motion.Heading>
        <Motion.Box
          className="text-center space-y-5 md:space-y-7"
          {...anim({ duration: 1, delay: 0.4 })}
        >
          <h3 className="heading-4 md:heading-3 font-dancing-script font-bold">
            Cinthya
          </h3>
          <div className="space-y-2">
            <p className="text-xs md:text-sm font-roboto-slab">
              si cantikk dann lucuuu
            </p>
            <p className="text-sm md:text-base font-roboto-slab">
              cewe paling mantep
            </p>
          </div>
        </Motion.Box>
      </div>
      <div className="flex gap-x-5 lg:gap-x-9">
        <Motion.Box
          className="w-[213px] h-[306px] md:h-[414px] xl:w-[287px] xl:h-[516px]"
          {...anim({ duration: 1, delay: 0.2 })}
        >
          <ProgressiveImage
            src={assetPath("/photos/kio.jpg?v=20261013")}
            alt="mesaya-photos"
            width={500}
            height={1000}
            className="size-full object-cover"
          />
        </Motion.Box>
        <Motion.Box
          className="w-[213px] h-[306px] md:h-[414px] xl:w-[287px] xl:h-[516px] mt-20 md:mt-[155px]"
          {...anim({ duration: 1, delay: 0.4 })}
        >
          <ProgressiveImage
            src={assetPath("/photos/christine.jpg?v=20261013")}
            alt="cinthya-photos"
            width={500}
            height={1000}
            className="size-full object-cover"
          />
        </Motion.Box>
      </div>
    </section>
  );
}
