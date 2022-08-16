import './App.css';
import Navbar from './components/Navbar';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Outlet, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

// 아이콘 라이브러리
library.add(fas, far);

const Layout = () => {
  return(
    <div>
      <Navbar />

      <Outlet />
    </div>
  )
}

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;


