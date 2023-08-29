import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="h-screen bg-black text-gray">
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
