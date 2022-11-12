import { BrowserRouter as Router } from 'react-router-dom';
import { GithubProvider } from './context/GithubContext';
import AnimatedRoutes from './components/AnimatedRoutes';
import './App.css';

function App() {
  return (
    <>
      <GithubProvider>
        <Router>
          <AnimatedRoutes />
        </Router>
      </GithubProvider>
    </>
  );
}

export default App;
