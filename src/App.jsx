import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Highlights from "./assets/components/Highlights";
import Details from "./assets/components/Details";
import JoinUs from "./assets/components/JoinUs";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Details />
        <JoinUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
