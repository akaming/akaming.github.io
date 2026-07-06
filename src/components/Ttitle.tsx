import type { ReactNode } from "react";
import styles from "./Title.module.css";

type TitleProps = {
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  color?: string;
  children: ReactNode;
};

const Title = ({
  as: Tag = "h2",
  align = "left",
  color = "",
  children,
}: TitleProps) => {
  return (
    <div className={`${styles.titleWrap} ${styles[align]} ${styles[color]}`}>
      <Tag className={styles.title}>{children}</Tag>
    </div>
  );
};

export default Title;
