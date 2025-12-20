import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import CategoryPage from "./pages/categoryPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    
    <BrowserRouter>
    <Toaster position="top-center" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/products/:category' element={<CategoryPage/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
