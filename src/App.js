import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/login/Login";
import Overview from "./components/overview/Overview";
import ErrorPage from "./components/error/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate replace to="/login" />}
        ></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/tours" element={<Overview />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
