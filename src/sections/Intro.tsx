import Container from "@/layout/Container/Container";
import styles from "./Intro.module.css";
import IntroImg from "@/assets/images/intro.png";
import Title from "@/components/Ttitle";
import IconGit from "@/assets/images/git.svg?react";
import IconBlog from "@/assets/images/blog.svg?react";

const Intro = () => {
  return (
    <Container id="home">
      <div className={styles.content}>
        <img src={IntroImg} className={styles.introImage} alt="인트로 이미지" />
        <div>
          <Title as="h2">
            Hello I’am <strong>Myungmin Lee.</strong>
            <br />
            <strong>Frontend</strong> <span>UI/UX Publisher</span>
            <br />
            Based In <strong>Korea.</strong>
          </Title>
          <p className={styles.description}>
            I work on turning design into clean, responsive, and maintainable
            user interfaces. Experienced in real-world projects using React,
            TypeScript, and modern CSS.
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

export default Intro;
