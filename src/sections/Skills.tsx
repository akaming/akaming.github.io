import Title from "@/components/Ttitle";
import Container from "@/layout/Container/Container";
import styles from "./Skills.module.css";
import IconHtml from "@/assets/images/icon-html.svg?react";
import IconCss from "@/assets/images/icon-css.svg?react";
import IconJavascript from "@/assets/images/icon-javscript.svg?react";
import IconTypescript from "@/assets/images/icon-typescript.svg?react";
import IconSass from "@/assets/images/icon-sass.svg?react";
import IconReact from "@/assets/images/icon-react.svg?react";
import IconNextjs from "@/assets/images/icon-nextjs.svg?react";
import IconGit from "@/assets/images/icon-git.svg?react";
import IconStorybook from "@/assets/images/icon-storybook.svg?react";
import IconFigma from "@/assets/images/icon-figma.svg?react";

const Skills = () => {
  return (
    <Container>
      <Title as="h2" align="center">
        My <strong>Skills</strong>
      </Title>
      <ul className={styles.skillList}>
        <li>
          <IconHtml />
          HTML
        </li>
        <li>
          <IconCss />
          CSS
        </li>
        <li>
          <IconSass />
          Sass / SCSS
        </li>
        <li>
          <IconJavascript />
          JavaScript
        </li>
        <li>
          <IconTypescript />
          TypeScript
        </li>
        <li>
          <IconReact />
          React
        </li>
        <li>
          <IconNextjs />
          Next.js
        </li>
        <li>
          <IconGit />
          Git
        </li>
        <li>
          <IconStorybook />
          Storybook
        </li>
        <li>
          <IconFigma />
          Figma
        </li>
      </ul>
    </Container>
  );
};

export default Skills;
