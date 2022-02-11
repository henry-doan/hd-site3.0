import { Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Navbar from './components/shared/Navbar';
import { MainContainer } from './components/styled/sharedStyles';

const App = () => (
  <>
    <Navbar />
    <MainContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </MainContainer>
  </>
)
export default App;
