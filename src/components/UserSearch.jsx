import { useState, useContext } from 'react';
import GithubContext from '../context/GithubContext';
import { FaGithub, FaAngleDoubleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Users from './Users';

function UserSearch() {
  const [ text, setText ] = useState('');
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
    <section className="user-search-section">
      <Link to='/' id='to-home-btn'><FaAngleDoubleLeft /></Link>
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
  )
}

export default UserSearch