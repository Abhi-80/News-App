import { Route,Routes } from 'react-router-dom';
import Header from './layouts/Header';
import Home from "./pages/Home";
import Category from "./pages/Category";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category/:slug" element={<Category/>} />
      </Routes>
    </>
  )
}

export default App;