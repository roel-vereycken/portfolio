import Navbar from "../components/Navbar";
import Picture from "../components/Picture";
import About from "../components/About";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Picture />
        <About />
      </div>
    </div>
  );
}
