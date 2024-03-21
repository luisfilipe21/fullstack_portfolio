import { AboutSection } from "./components/About";
import { Header } from "./components/Header"
import { Projects } from "./components/Projects";
import { Techs } from "./components/Techs";
import "./styles/index.scss";

function App() {

  return (
    <>
      <Header />
      <AboutSection />
      <Techs/>
      <Projects/>
    </>
  )
}

export default App
