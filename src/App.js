import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import About from "./components/About";
import Blog from "./components/Blog";
import Favorites from "./utils/Favorites";


function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <BrowserRouter>
    <Routes>
        <Route path = "/" element = {<Hero />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = '/home' element = {<Home /> }isAuthenticated={isAuthenticated} />
        <Route path = '/about' element = {<About /> }isAuthenticated={isAuthenticated} />
        <Route path = '/blog' element = {<Blog /> }isAuthenticated={isAuthenticated} />
        <Route path = '/favorites' element = {<Favorites />} isAuthenticated = {isAuthenticated} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
