import Title from "@/components/Ttitle";
import Container from "@/layout/Container/Container";
import styles from "./Experience.module.css";
import IconYb from "@/assets/images/icon-yb.png";
import IconGrotesq from "@/assets/images/icon-grotesq.png";
import IconSy from "@/assets/images/icon-sy.png";
import IconIdd from "@/assets/images/icon-idd.png";

const Experience = () => {
  return (
    <Container color="dark" id="experience">
      <Title as="h2" align="center" color="light">
        My <strong>Experience & Education</strong>
      </Title>
      <div className={styles.content}>
        <h3 className={styles.subTitle}>WORK EXPERIENCE</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.itemHeader}>
              <div className={styles.position}>
                <div className={styles.organization}>
                  <img src={IconYb} alt="노랑풍선 로고" />
                  노랑풍선
                </div>
                <span>WEB UI/UX팀 | React 기반 퍼블리셔</span>
              </div>
              <div className={styles.period}>2022.06 – 2025.12</div>
            </div>
            <ul className={styles.desc}>
              <li>자사 웹 서비스 운영 및 신규 페이지 제작</li>
              <li>
                React 환경에서 UI 퍼블리싱 및 컴포넌트 구조에 맞춘 마크업 작업
              </li>
              <li>디자인 시안 기반 반응형 웹 구현 (PC / Mobile)</li>
              <li>운영 서비스 유지보수 및 UI 개선 작업</li>
              <li>기획·디자인·개발팀과 협업하여 서비스 화면 구현</li>
            </ul>
          </li>
          <li className={styles.item}>
            <div className={styles.itemHeader}>
              <div className={styles.position}>
                <div className={styles.organization}>
                  <img src={IconGrotesq} alt="그로테스큐 로고" />
                  그로테스큐
                </div>
                <span>개발팀 | 프론트엔드 개발 인턴 (SI)</span>
              </div>
              <div className={styles.period}>2021.01 – 2021.06</div>
            </div>
            <ul className={styles.desc}>
              <li>React 기반 프론트엔드 화면 개발 참여</li>
              <li>
                AdonisJS 기반 백엔드 API 연동 및 간단한 서버 로직 개발 경험
              </li>
              <li>SI 프로젝트 일부 기능 구현 및 개발 프로세스 경험</li>
            </ul>
          </li>
          <li className={styles.item}>
            <div className={styles.itemHeader}>
              <div className={styles.position}>
                <div className={styles.organization}>
                  <img src={IconSy} alt="에스와이소프트 로고" />
                  에스와이소프트
                </div>
                <span>개발팀 | 웹 퍼블리셔</span>
              </div>
              <div className={styles.period}>2019.08 – 2020.08</div>
            </div>
            <ul className={styles.desc}>
              <li>전자입찰 자사 서비스 웹사이트 제작</li>
              <li>HTML/CSS 기반 퍼블리싱 및 화면 구조 설계</li>
              <li>운영 서비스 유지보수 및 UI 수정 작업</li>
            </ul>
          </li>
          <li className={styles.item}>
            <div className={styles.itemHeader}>
              <div className={styles.position}>
                <div className={styles.organization}>
                  <img src={IconIdd} alt="그룹아이디디 로고" />
                  그룹 아이디디
                </div>
                <span>개발팀 | 웹 퍼블리셔 & 프론트엔드 개발</span>
              </div>
              <div className={styles.period}>2016.11 – 2018.04</div>
            </div>
            <ul className={styles.desc}>
              <li>
                웹에이전시(광고회사) 소속으로 다수의 웹사이트 제작 및 운영
              </li>
              <li>기업·브랜드 웹사이트 퍼블리싱 및 유지보수</li>
              <li>프로젝트에 따라 프론트엔드 개발 업무 병행</li>
            </ul>
          </li>
        </ul>
        <h3 className={styles.subTitle}>EDUCATION</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.itemHeader}>
              <div className={styles.position}>
                <div className={styles.organization}>한양사이버대학교</div>
                <span>컴퓨터공학과 | 재학 중</span>
              </div>
              <div className={styles.period}>2023.03 – 현재</div>
            </div>
            <ul className={styles.desc}>
              <li>컴퓨터공학 전공 기반 프로그래밍 및 이론 학습</li>
              <li>자료구조, 프로그래밍 기초, 전산학 개론 등 이수</li>
            </ul>
          </li>
          <li className={styles.item}>
            <div className={styles.itemHeader}>
              <div className={styles.position}>
                <div className={styles.organization}>포큐 아카데미</div>
                <span>COMP1500 (C# 프로그래밍 과정) | 수료</span>
              </div>
              <div className={styles.period}>2021.01 – 2021.04</div>
            </div>
            <ul className={styles.desc}>
              <li>C# 기본 문법 및 객체지향 프로그래밍(OOP) 기초</li>
              <li>콘솔 애플리케이션 실습 및 예외 처리</li>
            </ul>
          </li>
          <li className={styles.item}>
            <div className={styles.itemHeader}>
              <div className={styles.position}>
                <div className={styles.organization}>하이미디어 컴퓨터학원</div>
                <span>반응형 웹디자인 취업반 (웹 퍼블리셔) | 수료</span>
              </div>
              <div className={styles.period}>2016.06 – 2016.09</div>
            </div>
            <ul className={styles.desc}>
              <li>HTML5 / CSS3 기반 웹 퍼블리싱</li>
              <li>JavaScript & jQuery 기초</li>
              <li>UX/UI 디자인 기초 및 포트폴리오 제작</li>
            </ul>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Experience;
