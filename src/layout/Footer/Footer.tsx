import styles from "./Footer.module.css";
import Logo from "@/assets/images/logo.svg?react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.brand}>
          <Logo className={styles.logo} aria-label="Myungmin Portfolio Logo" />
          Myungmin
        </div>
        <p>
          &copy;2026 Myungmin Lee
          <br /> Frontend UI / UX Publisher
        </p>
      </div>
    </footer>
  );
};

export default Footer;
