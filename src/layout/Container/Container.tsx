import type { ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  color?: string;
};

const Container = ({ color = "", children }: ContainerProps) => {
  return (
    <div className={`${styles[color]}`}>
      <section className={styles.container}>{children}</section>
    </div>
  );
};

export default Container;
