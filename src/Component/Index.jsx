import Home from "./Home";
import About from "./About";
import Event from "./Event";
import Gallery from "./Gallery";
import VideoGallery from "./VideoGallery";
import Donation from "./Donation";
import Cometti from "./Cometti";
import Contact from "./Contact";
// import Footer from "./Footer";

function Index() {
  return (
    <>
      {/* Har component ek section ke andar, id Navbar ke menuItems ke saath match kare */}
      <section id="home" className="scroll-mt-24">
        <Home />
      </section>

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="events" className="scroll-mt-24">
        <Event />
      </section>

      <section id="gallery" className="scroll-mt-24">
        <Gallery />
      </section>

      <section id="videos" className="scroll-mt-24">
        <VideoGallery />
      </section>

      <section id="donation" className="scroll-mt-24">
        <Donation />
      </section>

      <section id="cometti" className="scroll-mt-24">
        <Cometti />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default Index;
