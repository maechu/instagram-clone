import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import MainPage from "./pages/MainPage";

function App() {
  return (<BrowserRouter>
      <Routes>
        <Route path="/main-page" element={<MainPage />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;

