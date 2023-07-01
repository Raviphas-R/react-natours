import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login/Login";
import Overview from "./components/overview/Overview";
import ErrorPage from "./components/error/Error";

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
