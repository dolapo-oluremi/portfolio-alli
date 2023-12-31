import { BrowserRouter } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Projects from "./Pages/Projects/Projects"
import { AnimatePresence } from "framer-motion";
import Footer from "./Components/Footer/Footer";
import Social from "./Components/Socials/Social";

function App() {

  return (
    <div className="app">
      <AnimatePresence mode='wait'>
        <BrowserRouter>
          <Navbar />
          <Social />
          <Home />
          <Projects />
          <Footer />
        </BrowserRouter>
      </AnimatePresence>
    </div>
  )
}
export default App
