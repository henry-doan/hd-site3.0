import { Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Navbar from './components/shared/Navbar';
import { MainContainer } from './components/styled/sharedStyles';
import ProjectDetails from './components/projects/ProjectDetails';
import Footer from './components/shared/Footer';

const App = () => (
  <>
    <Navbar />
    <MainContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </MainContainer>
    <Footer />
  </>
)
export default App;
