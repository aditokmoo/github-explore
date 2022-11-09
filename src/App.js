import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import UserSearch from './components/UserSearch';
import NotFound from './pages/NotFound';
import './App.css';
import { GithubProvider } from './context/GithubContext';

function App() {
  return (
    <>
      <GithubProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/user-search' element={<UserSearch />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Router>
      </GithubProvider>
    </>
  );
}

export default App;
