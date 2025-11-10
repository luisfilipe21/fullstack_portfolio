import { AboutSection } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header"
import { Projects } from "./components/Projects";
import { Techs } from "./components/Techs";
import { useSlowScroll } from "./hooks/useSlowScroll";
import "./styles/index.scss";

function App() {
  useSlowScroll();
  return (
    <>
      <Header />
      <AboutSection />
      <Techs/>
      <Projects/>
      <Footer />
    </>
  )
}

export default App
