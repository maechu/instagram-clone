import './App.css';
import Navbar from './components/Navbar';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// 아이콘 라이브러리
library.add(fas, far);


function App() {
  return (
    <Navbar />
  );
}

export default App;

// export default App;
// function App() {
//   return (<BrowserRouter>
//       <Routes>
//         <Route path="/main-page" element={<MainPage />} />
//       </Routes>
//   </BrowserRouter>
//   );
// }

// export default App;

