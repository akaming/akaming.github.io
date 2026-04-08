import type { ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  color?: string;
  id?: string;
  tabIndex?: number;
};

const Container = ({ color = "", id = "", children, tabIndex }: ContainerProps) => {
  return (
    <div className={`${styles[color]} ${styles.wrap}`} id={id}>
      <section className={styles.container} tabIndex={tabIndex}>{children}</section>
    </div>
  );
};

export default Container;
