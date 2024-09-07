import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
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
      {/* 
      <NavBar />
      <Banner />
     <Footer /> */}
    </div>
  );
}

export default App;
