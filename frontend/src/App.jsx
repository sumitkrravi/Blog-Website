import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and Routes correctly
import Signup from "./pages/Signup";
import Createblog from './pages/Createblog';
import Blog from './pages/Blog'
import Contribute from "./pages/Contribute";
import Login from "./pages/Login";
// Other imports for your components

function App() {
  return (
    <Router> {/* Only one Router component here */}
      <Routes> {/* Define your routes here */}
        <Route path="/" element={<Home />} /> {/* Correct spelling for "element" */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/createblog" element={<Createblog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
