import { useMediaQuery } from "@/lib/useMediaQuery";
import { useState } from "react";
import styles from "./Header.module.css";
import Logo from "@/assets/images/logo.svg?react";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { label: "Skills", key: "skills" },
  { label: "About Me", key: "intro" },
  { label: "Project", key: "projects" },
  { label: "Contact", key: "contact" },
];

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);

  return (
    <>
      <header>
        <h1 className={styles.title}>
          <Logo className={styles.logo} aria-label="Myungmin Portfolio Logo" />
          Myungmin
        </h1>

        {isDesktop ? (
          <>
            <ul className={styles.nav}>
              {NAV.map((item) => (
                <li key={item.key}>{item.label}</li>
              ))}
            </ul>
            <ThemeToggle />
          </>
        ) : (
          <>
            <button
              type="button"
              className={`${styles.menuButton} ${open ? styles.isOpen : ""}`}
              aria-label="Toggle menu"
              aria-controls="mobile-drawer"
              aria-expanded={open}
              onClick={toggle}
            >
              <span className={styles.bar} />
            </button>

            {!isDesktop && open && (
              <div id="mobile-drawer" className={styles.mobileDrawer}>
                <ul className={styles.nav}>
                  {NAV.map((item) => (
                    <li key={item.key}>{item.label}</li>
                  ))}
                </ul>
                <ThemeToggle />
              </div>
            )}
          </>
        )}
      </header>
      {!isDesktop && open && (
        <div
          className={styles.dim}
          aria-hidden
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
