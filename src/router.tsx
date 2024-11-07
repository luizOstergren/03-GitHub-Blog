import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Issue } from './pages/issue'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/issue/:id' element={<Issue />} />
        </Routes >
    )
}