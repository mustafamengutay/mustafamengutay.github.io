import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="wrapper mx-auto h-screen text-gray">
      <Router>
        <Header />
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
