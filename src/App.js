import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import { BlogDetails } from "./components/homeComponents/BlogDetails";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import MakeAGift from "./components/MakeAGift";
import Navbar from "./components/Navbar";
import OurBlog from "./components/OurBlog";
import Team from "./components/Team";
import Topbar from "./components/Topbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar/>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/our-story" element={<AboutUs/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/activity" element={<OurBlog/>} />
          <Route path="/activity/:id" element={<BlogDetails/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/make-a-gift" element={<MakeAGift/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
