//import Test from "./Test";
import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/navbar/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
const App = () => {
  return <div>
   
    <section  id="HomePage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="Services"/></section>
    <section ><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <section >Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
<section id="Contact">Contact</section>
{/*<Test><><Test</>*/}
  </div>;
};

export default App;
