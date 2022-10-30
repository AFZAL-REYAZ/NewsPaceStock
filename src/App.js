import './App.css';
import NewsApi from './component/NewsApi';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Header from './component/Header';
import Login from './component/Login';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<NewsApi />}/>
    <Route path='/login' element={<Login />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
