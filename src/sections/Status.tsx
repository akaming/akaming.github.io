import Container from "@/layout/Container/Container";
import styles from "./Status.module.css";

const Status = () => {
  return (
    <Container>
      <p className={styles.kicker}>CURRENT STATUS</p>
      <h2 className={styles.title}>
        <span>Currently focusing on</span>
        <span className={styles.outline}>Frontend UI / UX Publishing</span>
        <span>with React and TypeScript.</span>
      </h2>
      <p className={styles.sub}>Open to new opportunities.</p>
    </Container>
  );
};

export default Status;
