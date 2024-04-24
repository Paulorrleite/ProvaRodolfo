import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Share from "./Pages/Share";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/share" element={<Share />} />
      </Routes>
    </Router>
  );
};

export default App;