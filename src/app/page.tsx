import Home from '../sections/Home';
import About from '../sections/About';
import Themes from '../sections/Themes';
import Timeline from '../sections/Timeline';
import Prizes from '../sections/Prizes';
import FAQ from '../sections/FAQ';
import Register from '../sections/Register';
import Contact from '../sections/Contact';
import Marquee from '../sections/Marquee';

export default function Page() {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <Marquee />
      <section id="about">
        <About />
      </section>
      <section id="themes">
        <Themes />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="prizes">
        <Prizes />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="register">
        <Register />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}