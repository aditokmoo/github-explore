import { useContext } from 'react';
import GithubContext from '../context/GithubContext'
import Spinner from './Spinner';

function Users() {
    const { users, loading } = useContext(GithubContext);

    if(!loading) {
        return (
            <>
                {users.map(user => (
                    <div className="card" key={user.id}>
                        <div className="card-image">
                            <img src="https://matob.web.id/random/wp-content/uploads/sites/2/2021/12/GitHub.jpg" alt="" />
                        </div>
                        <div className="card-profile">
                            <img src={user.avatar_url} alt="" />
                            <p>{user.login}</p>
                        </div>
                    </div>
                ))}
            </>
        )
    } else {
        return <Spinner />
    }
}

export default Users