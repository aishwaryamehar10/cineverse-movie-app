import Hero from "./pages/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Favorites from "./components/Favorites";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={<Home />}
          isAuthenticated={isAuthenticated}
        />
        <Route
          path="/about"
          element={<About />}
          isAuthenticated={isAuthenticated}
        />
        <Route
          path="/blog"
          element={<Blog />}
          isAuthenticated={isAuthenticated}
        />
        <Route
          path="/favorites"
          element={<Favorites />}
          isAuthenticated={isAuthenticated}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
