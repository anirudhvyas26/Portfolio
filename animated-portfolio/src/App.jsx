//import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/navbar/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import About from "./components/about/About";
const App = () => {
  return (
    <div>
      <Cursor/>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="Services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
     
      <section id="About">
        <About type="About"/>
      </section>

      {/*<Test><><Test</>*/}
    </div>
  );
};

export default App;
