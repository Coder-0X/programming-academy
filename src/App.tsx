/* React import not needed in >=17 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LanguageTrack from './pages/LanguageTrack'
import LevelPage from './pages/LevelPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <ProgressProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/:language" element={<LanguageTrack />} />
                <Route path="/:language/level/:levelId" element={<LevelPage />} />
              </Routes>
            </div>
          </Router>
        </ProgressProvider>
      </GoogleOAuthProvider>
    </AuthProvider>
  )
 }
 
 export default App

