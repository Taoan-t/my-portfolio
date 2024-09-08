import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./backup/NavBar";
import { Banner } from "./backup/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* 
      <NavBar />
      <Banner />
     */}
    </div>
  );
}

export default App;
