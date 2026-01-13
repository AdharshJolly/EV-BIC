import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Themes from './pages/Themes';
import Register from './pages/Register';
import Guidelines from './pages/Guidelines';
// import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-primary text-brand-text font-sans selection:bg-brand-accent selection:text-brand-dark">
      <Navbar />
      <main className="flex-grow">
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
        {/* <section id="sponsors">
          <Sponsors />
        </section> */}
        <section id="register">
          <Register />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;