import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LanguageTrack from './pages/LanguageTrack';
import LevelPage from './pages/LevelPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:language" element={<LanguageTrack />} />
          <Route path="/:language/level/:levelId" element={<LevelPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
