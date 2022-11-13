import { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import GithubContext from "../../context/GithubContext";
// React icons
import { TbGitFork } from 'react-icons/tb'
import { AiOutlineStar } from 'react-icons/ai';

function Repositories() {
  const { repos, getRepos } = useContext(GithubContext);
  const params = useParams()

  useEffect(() => {
    getRepos(params.login);
  }, [])

  return (
    <div className="user-repos">
      {repos.map(repo => (
        <div className="repo" key={repo.id}>
         <h4><a href={repo.html_url}> {repo.name}</a> <span>{repo.visibility}</span></h4>
         <p>{repo.description}</p>
         <h5>
            <div>{repo.language && <div className='circle'></div>} {repo.language}</div>
            <div>{repo.watchers !== 0 && <><AiOutlineStar id="watch-icon" /> {repo.watchers} </> }</div>
            <div>{repo.forks !== 0 && <> <TbGitFork id="fork-icon" /> {repo.forks} </>} </div>
          </h5>
        </div>
      ))}
    </div>
  )
}

export default Repositories