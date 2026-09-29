import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
