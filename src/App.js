import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login";
import Overview from "./components/overview";
import ErrorPage from "./components/error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overview />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
