import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'
import GithubContext from '../context/GithubContext';
// Components
import Navbar from './Navbar';
import Overview from './github-profile/Overview';
import Repositories from './github-profile/Repositories';
import Projects from './github-profile/Projects';
import Stars from './github-profile/Stars';
// React Icons
import { AiOutlineTeam, AiOutlineStar } from 'react-icons/ai';
import { BiBuilding, BiBookOpen } from 'react-icons/bi';
import { SlLocationPin } from 'react-icons/sl';
import { BsLink45Deg } from 'react-icons/bs'
import { TbTable } from 'react-icons/tb'
import { RiGitRepositoryLine } from 'react-icons/ri'

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
  const [ activeTab, setActiveTab ] = useState(1);
  const { getUser, user } = useContext(GithubContext);
  const params = useParams();

  const toggleTab = (index) => setActiveTab(index);

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
                    <li>{blog && <BsLink45Deg />} <a href={blog} target='_blank' rel="noreferrer" id="blog-link" >{blog}</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="section-two">
              <div className="user-nav">
                <ul>
                  <li onClick={() => toggleTab(1)}><span className={activeTab === 1 ? 'active' : ''}><BiBookOpen id='link-icon' /> Overview</span></li>
                  <li onClick={() => toggleTab(2)}><span className={activeTab === 2 ? 'active' : ''}><RiGitRepositoryLine id='link-icon' /> Repositories</span></li>
                  <li onClick={() => toggleTab(3)}><span className={activeTab === 3 ? 'active' : ''}><TbTable id='link-icon' /> Projects</span></li>
                  <li onClick={() => toggleTab(4)}><span className={activeTab === 4 ? 'active' : ''}><AiOutlineStar id='link-icon' /> Stars</span></li>
                </ul>
              </div>

              <div className="user-tab">
                <div className={activeTab === 1 ? 'tab active-tab' : 'tab'}>
                  <Overview />
                </div>
                <div className={activeTab === 2 ? 'tab active-tab' : 'tab'}>
                  <Repositories />
                </div>
                <div className={activeTab === 3 ? 'tab active-tab' : 'tab'}>
                  <Projects />
                </div>
                <div className={activeTab === 4 ? 'tab active-tab' : 'tab'}>
                  <Stars />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default User