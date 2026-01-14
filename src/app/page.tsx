import Home from '../sections/Home';
import About from '../sections/About';
import Themes from '../sections/Themes';
import Register from '../sections/Register';
import Guidelines from '../sections/Guidelines';
import Contact from '../sections/Contact';

export default function Page() {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="themes">
        <Themes />
      </section>
      <section id="guidelines">
        <Guidelines />
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