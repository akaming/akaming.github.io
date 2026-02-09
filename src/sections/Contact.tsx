import Container from "@/layout/Container/Container";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <Container>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            name="name"
            className={styles.input}
            type="text"
            placeholder="Your name"
            autoComplete="name"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            className={styles.input}
            type="email"
            placeholder="Email"
            autoComplete="email"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="website">
            Your website (if exists)
          </label>
          <input
            id="website"
            name="website"
            className={styles.input}
            type="url"
            placeholder="Your website (if exists)"
            autoComplete="url"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="message">
            How can I help?*
          </label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            placeholder="How can I help?*"
            required
          />
        </div>

        {/* <button className={styles.button} type="submit">Send</button> */}
      </form>

      {/* Right: Copy */}
      <div className={styles.copy}>
        <h2 id="contact-title" className={styles.title}>
          From design to
          <br />
          working UI.
        </h2>

        <p className={styles.desc}>
          I translate designs into precise, responsive interfaces. Experienced
          in real-world projects where structure, accessibility, and
          collaboration matter.
        </p>

        <div className={styles.meta}>
          <a className={styles.metaLink} href="mailto:Youremail@gmail.com">
            Youremail@gmail.com
          </a>
          <a className={styles.metaLink} href="tel:1234567890">
            1234567890
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
