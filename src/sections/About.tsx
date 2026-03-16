import Title from "@/components/Ttitle";
import Container from "@/layout/Container/Container";
import ImgCat from "@/assets/images/img-cat.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <Container id="about">
      <div className={styles.content}>
        <img src={ImgCat} alt="aubot me 이미지" />
        <div className={styles.info}>
          <Title as="h2">
            About <strong>Me</strong>
          </Title>
          <div className={styles.text}>
            <p>
              저는 디자인을 깔끔하고 안정적이며 유지보수하기 쉬운 사용자
              인터페이스로 구현하는 데 집중하는 Frontend UI / UX
              Publisher입니다. 특히 디자인상의 결정이 실제로 작동하는
              레이아웃으로 어떻게 이어지는지 그리고 작은 디테일이 다양한
              디바이스에서의 사용성과 일관성에 어떤 영향을 주는지에 관심이
              많습니다.
            </p>
            <p>
              주로 React와 TypeScript를 사용하며 구조 간격 반응형 동작에 중점을
              둔 컴포넌트 기반 UI를 구축합니다. 시각적인 효과나 화려한
              인터랙션에 의존하기보다는 명확하고 예측 가능하며 실제 운영
              환경에서도 기대한 대로 동작하는 인터페이스를 만드는 데 집중합니다.
            </p>
            <p>
              또한 읽기 쉬운 코드 재사용 가능한 컴포넌트 그리고 디자이너 및
              개발자와의 협업을 중요하게 생각합니다. 이를 통해 디자인된 결과물이
              정확하고 지속 가능한 방식으로 구현될 수 있도록 합니다. 제 목표는
              단순히 보기 좋은 화면이 아니라 시간이 지나도 유지·확장·사용하기
              좋은 인터페이스를 만드는 것입니다.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
