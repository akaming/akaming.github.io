import Header from "@/layout/Header/Header";
import Intro from "@/sections/Intro";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Status from "@/sections/Status";
import Footer from "@/layout/Footer/Footer";
import About from "@/sections/About";

const Home = () => (
  <>
    <Header />
    <Intro />
    <Skills />
    <Experience />
    <About />
    <Projects />
    <Status />
    <Footer />
  </>
);

export default Home;
