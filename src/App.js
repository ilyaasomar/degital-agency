import About from "./components/About";
import Blog from "./components/Blog";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className='max-w-[1640px] mx-auto'>
     <Navbar />
     <Hero />
     <About />
     <Services />
     <Features />
     <Blog />
     <Footer />
    </div>
  );
}

export default App;
