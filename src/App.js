import './App.css';
import { Navbar } from './Components';
import { Footer } from './Components';
import { Home, AboutPage, Products, Account, Workout } from './Pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/product' element={<Products />}></Route>
          <Route path='/workout' element={<Workout />}></Route>
          <Route path='/account' element={<Account />}></Route>
        </Routes>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
