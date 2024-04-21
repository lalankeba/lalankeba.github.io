import { About } from "../components/About";
import { Articles } from "../components/Articles";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Articles />
    </>
  )
}
