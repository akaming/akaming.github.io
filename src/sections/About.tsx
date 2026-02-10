import Title from "@/components/Ttitle";
import Container from "@/layout/Container/Container";
import ImgCat from "@/assets/images/img-cat.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <Container>
      <div className={styles.content}>
        <img src={ImgCat} alt="aubot me 이미지" />
        <div className={styles.info}>
          <Title as="h2">
            About <strong>Me</strong>
          </Title>
          <div className={styles.text}>
            <p>
              I’m a Frontend UI / UX Publisher focused on turning design into
              clean, reliable, and maintainable user interfaces. I’m
              particularly interested in how design decisions translate into
              real, working layouts and how small details affect usability and
              consistency across different devices.
            </p>
            <p>
              I work primarily with React and TypeScript, building
              component-based UI with a strong emphasis on structure, spacing,
              and responsive behavior. Rather than relying on visual effects or
              flashy interactions, I focus on clarity, predictability, and
              interfaces that behave as expected in real production
              environments.
            </p>
            <p>
              I value readable code, reusable components, and collaboration with
              designers and developers to ensure that what’s designed can be
              implemented accurately and sustainably. My goal is to build
              interfaces that not only look good, but are practical to maintain,
              scale, and use over time.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
