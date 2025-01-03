"use client";
import { FC, useRef } from "react";
import scss from "./ModernInterior.module.scss";
import {
  default as leftIcon,
  default as rightIcon,
} from "@/assets/Frame 10.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Image1 from "@/assets/Component 86.png";
import Image2 from "@/assets/Component 87.png";
import Image3 from "@/assets/Component 88.png";
import Image4 from "@/assets/Component 89.png";
import Image5 from "@/assets/Component 90.png";

const ModernInterior: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="Interier" className={scss.ModernInterior}>
      <div className={scss.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className={scss.hero}
        >
          <Image width={51} height={14} src={leftIcon} alt="photo" />
          <h1>Main Menu</h1>
          <Image width={51} height={14} src={rightIcon} alt="photo" />
        </motion.div>
        <div className={scss.gallery}>
          <div className={scss.tall}>
            <Image
              src={Image1}
              alt="Interior 1"
              width={426}
              height={488}
              quality={100}
              className={scss.image}
            />
          </div>

          <div className={scss.imgBlock}>
            <Image
              src={Image2}
              alt="Interior 2"
              width={501}
              height={244}
              className={scss.image}
            />
            <div className={scss.smallBlock}>
              <Image
                src={Image3}
                alt="Interior 3"
                width={278}
                height={223}
                className={scss.image}
              />
              <Image
                src={Image4}
                alt="Interior 4"
                width={208}
                height={223}
                quality={100}
                className={scss.image}
              />
            </div>
          </div>
          <div className={scss.tall}>
            <Image
              src={Image5}
              alt="Interior 5"
              width={427}
              height={488}
              quality={100}
              className={scss.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernInterior;
