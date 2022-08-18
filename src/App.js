import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Profile from './pages/Profile'
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage'

// 아이콘 라이브러리
library.add(fas, far);

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<LoginPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


