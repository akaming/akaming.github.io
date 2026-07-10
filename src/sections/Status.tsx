import Container from "@/layout/Container/Container";
import styles from "./Status.module.css";

const Status = () => {
  return (
    <Container>
      <p className={styles.kicker}>CURRENT STATUS</p>
      <h2 className={styles.title}>
        <span>Currently transitioning into</span>
        <span className={styles.outline}>Service Planning,</span>
        <span>built on 7 years of UI/UX Publishing.</span>
      </h2>
      <p className={styles.sub}>Open to new opportunities.</p>
    </Container>
  );
};

export default Status;
