import { createContext, useState, useEffect } from "react";

const GithubContext = createContext();

const GITHUB_API = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    const [ users, setUsers ] = useState([]);
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

    return <GithubContext.Provider value={{
        users,
        loading,
        searchUsers
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext