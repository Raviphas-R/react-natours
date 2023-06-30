// import { BASE_URL } from "./config";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
// import Footer from "./components/footer";
import LoginPage from "./components/login";
import TourCard from "./components/overview";
// import { getAllTours } from "./API";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TourCard />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
