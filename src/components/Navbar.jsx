import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

function Navbar() {
  return (
    <nav>
        <div className="container">
            <div className="nav-section">
                <h1><FaGithub id='github-icon' /> Github Explore</h1>
            </div>
        </div>
    </nav>
  )
}

export default Navbar