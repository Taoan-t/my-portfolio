import { useState } from "react";
import styles from "./Header.module.css";
import { RiLeafLine, RiApps2Line, RiCloseLargeLine } from "@remixicon/react";

const Header = () => {
  const [show, setShow] = useState(false);

  function showMenu() {
    setShow(!show);
  }

  return (
    <header class={styles.header} id="header">
      <nav class={`${styles.nav} ${styles.container}`}>
        <a href="#" class={styles["nav__logo"]}>
          <RiLeafLine />
          <span>Temple</span>
        </a>
        <div class={styles["nav__menu"]} id="nav-menu">
          <ul class={styles["nav__list"]}>
            <li>
              <a href="#" class={styles["nav__link"]}>
                Home
              </a>
            </li>
            <li>
              <a href="#" class={styles["nav__link"]}>
                Location
              </a>
            </li>
            <li>
              <a href="#" class={styles["nav__link"]}>
                About
              </a>
            </li>
            <li>
              <a href="#" class={styles["nav__link"]}>
                Explore
              </a>
            </li>
            <li>
              <a href="#" class={styles["nav__link"]}>
                Contact
              </a>
            </li>
          </ul>

          {/* Close button */}
          <div class={styles["nav__close"]} id="nav-close">
            <RiCloseLargeLine />
          </div>
        </div>

        {/* Toggle button  */}
        <div
          class={
            show
              ? `${styles["nav__toggle"]} ${styles["show-menu"]}`
              : styles["nav__toggle"]
          }
          id="nav-toggle"
          onClick={showMenu}
        >
          <RiApps2Line />
        </div>
      </nav>
    </header>
  );
};

export default Header;
