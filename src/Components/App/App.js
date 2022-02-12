import NavBar from "../NavBar/NavBar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../HomePage/HomePage";
import InfoPage from "../InfoPage/InfoPage";
import ContactPage from "../ContactPage/ContactPage";
import '../Styles/NavBar.scss';
import PancakePage from "../PancakePage/PancakePage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/info" element={<InfoPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="/pancakes" element={<PancakePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
