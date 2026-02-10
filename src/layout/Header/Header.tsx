import { useMediaQuery } from "@/lib/useMediaQuery";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Logo from "@/assets/images/logo.svg?react";
import ThemeToggle from "./ThemeToggle";

type Section = "skills" | "experience" | "about" | "projects";

const NAV: { id: Section; label: string }[] = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
];

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const [active, setActive] = useState<Section | null>(null);

  const moveTo = (id: Section) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 72;

      const skillsEl = document.getElementById("skills");
      if (skillsEl && scrollY < skillsEl.offsetTop) {
        setActive(null);
        return;
      }

      for (let i = NAV.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV[i].id);
        if (section && scrollY >= section.offsetTop) {
          setActive(NAV[i].id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header>
        <div className={styles.headerWrap}>
          <h1
            className={styles.title}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Logo
              className={styles.logo}
              aria-label="Myungmin Portfolio Logo"
            />
            <span className="sr-only">Home</span>
            Myungmin
          </h1>

          {isDesktop ? (
            <>
              <nav className={styles.nav}>
                {NAV.map((menu) => (
                  <button
                    key={menu.id}
                    className={`${styles.link} ${
                      active === menu.id ? styles.active : ""
                    }`}
                    onClick={() => moveTo(menu.id)}
                  >
                    {menu.label}
                  </button>
                ))}
              </nav>
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
                  <nav className={styles.nav}>
                    {NAV.map((menu) => (
                      <button
                        key={menu.id}
                        className={`${styles.link} ${
                          active === menu.id ? styles.active : ""
                        }`}
                        onClick={() => moveTo(menu.id)}
                      >
                        {menu.label}
                      </button>
                    ))}
                  </nav>
                  <ThemeToggle />
                </div>
              )}
            </>
          )}
        </div>
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
