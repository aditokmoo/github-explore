import {  Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import UserSearch from './UserSearch';
import User from './User';
import NotFound from '../pages/NotFound';
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/user-search' element={<UserSearch />} />
                <Route path='/users/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes