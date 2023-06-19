import { Routes, Route } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
