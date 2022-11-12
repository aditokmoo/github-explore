import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineTeam } from 'react-icons/ai';
import { BiBuilding } from 'react-icons/bi';
import { SlLocationPin } from 'react-icons/sl';
import { BsLink45Deg } from 'react-icons/bs'
import GithubContext from '../context/GithubContext';
import Navbar from './Navbar';
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
    x: '100vw',
    transition: {
      ease: 'linear',
      duration: 0.5
    }
  }
}

function User() {
  const { getUser, user } = useContext(GithubContext);
  const params = useParams();

  const { 
    login,
    name,
    avatar_url,
    company,
    blog,
    location,
    bio,
    public_repos,
    public_gists,
    followers,
    following
  } = user

  useEffect(() => {
    getUser(params.login)
  }, []);

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Navbar />
      <div className="github-profile">
        <div className="container">
          <div className="section">
            <div className="section-one">
              <img src={avatar_url} alt="profile image" />
              <div className="section-head">
                <h2 className='name'>{name}</h2>
                <h2 className='login'>{login}</h2>
                <div className="bio">
                  <p>{bio}</p>
                </div>
              </div>
              <div className="section-details">
                <div className="follow-section">
                  <AiOutlineTeam />
                  <p><span>{followers}</span> followers</p>
                  <p>-</p>
                  <p><span>{following}</span> following</p>
                </div>
                <div className="info-section">
                  <ul>
                    <li>{company && <BiBuilding /> } {company}</li>
                    <li>{location ? <SlLocationPin /> : null } {location}</li>
                    <li>{blog && <BsLink45Deg />} <Link to={blog} id="blog-link" >{blog}</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="section-two"></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default User