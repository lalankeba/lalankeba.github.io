import { About } from "../components/About";
import { Articles } from "../components/Articles";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export const Home = ({projects}) => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Articles />
      <Contact />
    </>
  )
}
