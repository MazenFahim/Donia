import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { CertifiedBy } from "./components/CertifiedBy";
import { Education } from "./components/Education";
import { Universities } from "./components/Universities";
import { TrainingVideos } from "./components/TrainingVideos";
import { EventsCarousel } from "./components/EventsCarousel";
import { Programs } from "./components/Programs";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        background: "#F8F5EF",
        minHeight: "100vh",
        color: "#1C1C1C",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <CertifiedBy />
      <Education />
      <Universities />
      <TrainingVideos />
      <EventsCarousel />
      <Programs />
      <Contact />
    </div>
  );
}
