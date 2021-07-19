import Navbar from "../components/Navbar";
import Picture from "../components/Picture";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Picture />
        <About />
        <Contact />
      </div>
    </div>
  );
}
