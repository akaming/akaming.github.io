import Container from "@/layout/Container/Container";
import styles from "./About.module.css";
import IntroImg from "@/assets/images/intro.png";
import Title from "@/components/Ttitle";
import IconGit from "@/assets/images/git.svg?react";
import IconBlog from "@/assets/images/blog.svg?react";

const About = () => {
  return (
    <Container>
      <div className={styles.content}>
        <img src={IntroImg} className={styles.introImage} alt="인트로 이미지" />
        <div>
          <Title as="h2">
            Hello I’am <strong>Flora Sheen.</strong>
            <br />
            <strong>Frontend</strong> <span>Developer</span>
            <br />
            Based In <strong>India.</strong>
          </Title>
          <p className={styles.description}>
            I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
          <ul className={styles.links}>
            <li>
              <a href="https://github.com/akaming" target="_blank">
                <IconGit aria-label="깃허브 링크" />
              </a>
            </li>
            <li>
              <a href="https://myungmin.tistory.com" target="_blank">
                <IconBlog aria-label="개발 블로그 링크" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default About;
