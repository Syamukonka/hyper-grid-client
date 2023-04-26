import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import View from "./pages/View";
import AddCustomer from "./pages/AddCustomer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/home" element ={<Home/>} />
        <Route path="/customer/:id" element ={<View/>} />
        <Route path="/customer/new" element ={<AddCustomer/>} />
        <Route path="/customer/edit/:id" element ={<AddCustomer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
