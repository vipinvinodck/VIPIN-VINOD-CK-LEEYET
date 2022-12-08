import logo from './logo.svg';
import './App.css';
import Registration from './Components/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Password from './Components/Password';
import Input from './Components/Input';
function App() {
  return (
    <div className="App">
     {/* <Registration/> */}
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/reg" element={<Registration />} />
     <Route path="/pass" element={<Password />} />
     <Route path="/input" element={<Input />} />
     </Routes>
     </BrowserRouter>
    </div>

  );
}

export default App;
