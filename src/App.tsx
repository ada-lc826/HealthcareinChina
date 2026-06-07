import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Hospitals from './pages/Hospitals';
import Packages from './pages/Packages';
import Process from './pages/Process';
import About from './pages/About';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </LanguageProvider>
  );
}

export default App;
