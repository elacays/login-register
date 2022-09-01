import './App.css';
import Header from './Components/Header';
import UserLogin from './Components/UserLogin';
import UserRegister from './Components/UserRegister';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserLogin/>} />
        <Route path="register" element={<UserRegister />} />
      </Routes>
      
    </div>
  );
}

export default App;
