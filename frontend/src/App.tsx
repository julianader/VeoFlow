import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import EditorPage from './pages/EditorPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/editor/:projectId" element={<EditorPage />} />
      </Routes>
    </Router>
  );
}

export default App;