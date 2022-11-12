import { createContext, useState, useEffect } from "react";

const GithubContext = createContext();

const GITHUB_API = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    const [ users, setUsers ] = useState([]);
    const [ user, setUser ] = useState([]); 
    const [ repos, setRepos ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, [])

    // Fetch users
    const fetchUsers = async () => {
        const res = await fetch(`${GITHUB_API}/users`, {
            headers: {
                Authorization: `${GITHUB_TOKEN}`
            }
        })

        const data = await res.json();

        setUsers(data);
        setLoading(false);
    }

    // Search Users
    const searchUsers = async (text) => {
        const res = await fetch(`${GITHUB_API}/search/users?q=${text}`, {
            headers: {
                Authorization: `${GITHUB_TOKEN}`
            }
        })
        
        const {items} = await res.json();

        setUsers(items);
        setLoading(false);
    }

    const getUser = async (login) => {
        const res = await fetch(`${GITHUB_API}/users/${login}`, {
            headers: {
                Authorization: `${GITHUB_TOKEN}`
            }
        });

        const data = await res.json();

        setUser(data);
    }

    const getRepos = async (login) => {
        const res = await fetch(`${GITHUB_API}/users/${login}/repos`, {
            headers: {
                Authorization: `${GITHUB_TOKEN}`
            }
        });

        const data = await res.json();

        setRepos(data);
    }

    return <GithubContext.Provider value={{
        users,
        loading,
        user,
        repos,
        searchUsers,
        getUser,
        getRepos
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext