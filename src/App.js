
import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/projectDetail" element={<ProjectDetailCard />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;