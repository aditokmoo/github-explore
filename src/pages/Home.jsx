import { FaAngleDoubleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <Navbar />
      <header>
        <div className="container">
          <div className="header">
            <div className="header-section">
              <h1>Let's search developers on Github</h1>
              <p>GitHub Explore is a website built for searching developers from GitHub. Where you can also check their GitHub profiles and repositories</p>
              <button>
              <Link to='/user-search' id='button'>
                  Start searching <FaAngleDoubleRight id="angle-right-icon" />
              </Link>  
              </button>
            </div>
            <img src="https://education.github.com/assets/campus_program-9372374f8cd435dafb8e725cb67ee73b587af7a9b2f176dfec968afe3b05338c.png" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Home