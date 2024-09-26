import Education from "./Education";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Navbar />
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default Home;
