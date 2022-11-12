import { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import GithubContext from "../../context/GithubContext";
import { RiGitRepositoryLine } from 'react-icons/ri'

function Overview() {
  const { repos, getRepos } = useContext(GithubContext);
  const params = useParams()

  useEffect(() => {
    getRepos(params.login);
  }, [])

  return (
    <div className="user-repos">
      {repos.slice(0,6).map(repo => (
        <div className="repo" key={repo.id}>
         <h4><RiGitRepositoryLine /> <a href={repo.html_url}> {repo.name}</a> <span>{repo.visibility}</span></h4>
         <p>{repo.description}</p>
         <h5><div className='circle'></div>{repo.language}</h5>
        </div>
      ))}
    </div>
  )
}

export default Overview