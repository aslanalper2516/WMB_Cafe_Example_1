import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import LocationsPage from './pages/LocationsPage';
import StoryPage from './pages/StoryPage';
import FranchisePage from './pages/FranchisePage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/franchise" element={<FranchisePage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
