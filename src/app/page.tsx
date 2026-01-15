import Home from "../sections/Home";
import About from "../sections/About";
import CenterOfExcellence from "../sections/CenterOfExcellence";
import Hardware from "../sections/Hardware";
import Themes from "../sections/Themes";
import Timeline from '../sections/Timeline';
import Team from '../sections/Team';
import Prizes from "../sections/Prizes";
import FAQ from '../sections/FAQ';
import Register from '../sections/Register';
import Contact from '../sections/Contact';
import Marquee from '../sections/Marquee';


export default function Page() {
  return (
    <>
      <section id="home" className="relative z-10">
        <Home />
      </section>
      <div className="relative z-10">
        <Marquee />
      </div>
      <section id="about" className="relative z-10">
        <About />
      </section>
      <section id="coe" className="relative z-10">
        <CenterOfExcellence />
      </section>
      <section id="hardware" className="relative z-10">
        <Hardware />
      </section>
      <section id="themes" className="relative z-10">
        <Themes />
      </section>
      <section id="timeline" className="relative z-10">
        <Timeline />
      </section>
      <section id="team" className="relative z-10">
        <Team />
      </section>
      <section id="prizes" className="relative z-10">
        <Prizes />
      </section>
      <section id="faq" className="relative z-10">
        <FAQ />
      </section>
      {/* <section id="sponsors" className="relative z-10">
        <Sponsors />
      </section> */}
      <section id="register" className="relative z-10">
        <Register />
      </section>
      <section id="contact" className="relative z-10">
        <Contact />
      </section>
    </>
  );
}
