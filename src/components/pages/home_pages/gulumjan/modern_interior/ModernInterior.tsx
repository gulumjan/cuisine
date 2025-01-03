import interior1 from "@/assets/Component 86.png";
import interior2 from "@/assets/Component 87.png";
import interior3 from "@/assets/Component 88.png";
import interior4 from "@/assets/Component 89.png";
import interior5 from "@/assets/Component 90.png";
import leftIcon from "@/assets/Frame 10.png";
import rightIcon from "@/assets/Frame 10.png";
import Image from "next/image";
import scss from "./ModernInterior.module.scss";

const ModernInterior = () => {
  return (
    <section className={scss.Interior} id="Interior">
      <div className="container">
        <div className={scss.content}>
          <div className={scss.hero}>
            <Image width={51} height={14} src={leftIcon} alt="photo" />
            <h1>Modern interior</h1>
            <Image width={51} height={14} src={rightIcon} alt="photo" />
          </div>
          <div className={scss.block}>
            <Image
              src={interior1}
              alt="photo"
              width={426}
              height={488}
              quality={100}
            />

            <div className={scss.box}>
              <Image
                src={interior2}
                alt="photo"
                width={501}
                height={244}
                quality={100}
              />
              <div className={scss.images}>
                <Image
                  src={interior3}
                  alt="photo"
                  width={278}
                  height={223}
                  quality={100}
                />
                <Image
                  src={interior4}
                  alt="photo"
                  width={208}
                  height={223}
                  quality={100}
                />
              </div>
            </div>

            <Image
              src={interior1}
              alt="photo"
              width={426}
              height={488}
              quality={100}
            />

            <div className={scss.box}>
              <Image
                src={interior2}
                alt="photo"
                width={501}
                height={244}
                quality={100}
              />
              <div className={scss.images}>
                <Image
                  src={interior3}
                  alt="photo"
                  width={278}
                  height={223}
                  quality={100}
                />
                <Image
                  src={interior4}
                  alt="photo"
                  width={208}
                  height={223}
                  quality={100}
                />
              </div>
            </div>

            <Image src={interior5} alt="photo" width={427} height={488} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernInterior;
