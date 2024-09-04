import gsap from "gsap"; // import GSAP
import { useGSAP } from "@gsap/react"; // import the hook
import { CSSPlugin } from "gsap/CSSPlugin";

import { useRef } from "react";

import styles from "./Hero.module.css";
import bg from "../assets/img/hero-bg.jfif";
import img1 from "../assets/img/hero-cherry-blossom.png";
import img2 from "../assets/img/hero-boat.png";
import img3 from "../assets/img/hero-sun.png";

gsap.registerPlugin(CSSPlugin);

const Hero = () => {
  const cherryRef = useRef();
  const boatRef = useRef();
  const sunRef = useRef();

  useGSAP(() => {
    gsap.from(cherryRef.current, {
      opacity: 0,
      x: 400,
      duration: 5,
    });
  });

  useGSAP(() => {
    gsap.from(boatRef.current, {
      opacity: 0,
      y: 200,
      delay: 1.8,
      duration: 1.5,
      ease: "back.out(1.5)",
    });
  });

  useGSAP(() => {
    gsap.from(sunRef.current, {
      opacity: 0,
      x: 70,
      delay: 3,
      duration: 1.5,
      ease: "back.out(1.5)",
    });
  });

  return (
    <section class={styles.hero}>
      <img src={bg} alt="image" class={styles["hero__bg"]} />
      <div class={`${styles["hero__container"]} ${styles.container}`}>
        <div class={styles["hero__data"]}>
          <h1 class={styles["hero__title"]}>
            Welcome To <br />
            Temple
          </h1>
          <p class={styles["hero__description"]}>
            The temple is an attractive tourist place where you could visit and
            connect to the pure land of the environment, you will experience
            peace and harmony.
          </p>
          <a href="" class={styles["hero__button"]}>
            Explore Place
          </a>
          <img
            ref={sunRef}
            src={img3}
            alt="sun"
            class={styles["hero__img-3"]}
          />
        </div>

        <div class={styles["hero__images"]}>
          <img
            ref={cherryRef}
            src={img1}
            alt="cherry"
            class={styles["hero__img-1"]}
          />

          <img
            ref={boatRef}
            src={img2}
            alt="boat"
            class={styles["hero__img-2"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
