import { useState, useContext } from 'react';
import GithubContext from '../context/GithubContext';
import { FaGithub, FaAngleDoubleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Users from './Users';
import { motion } from 'framer-motion'

const variant = {
  hidden: {
    opacity: 0,
    x: 0
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5
    }
  },
}


function UserSearch() {
  const [ text, setText ] = useState('');
  const [ click, setClick ] = useState(true);
  const { searchUsers } = useContext(GithubContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(text.trim() === '') {
      alert('Please enter username');
    } else {
      searchUsers(text);

      setText('');
    }
  }

  return (
    <motion.div 
      variants={variant}
      initial='hidden'
      animate='visible'
      exit="exit"
    >
      <section className="user-search-section">
        <Link to='/' id='to-home-btn' onClick={() => setClick(false)}><FaAngleDoubleLeft /></Link>
        <div className="container">
          <h1>Github <span>explore</span> <FaGithub /></h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Search users' />
            <button>Search</button>
          </form>
          <div className="users-section">
            <Users />
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default UserSearch