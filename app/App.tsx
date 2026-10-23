import { BrowserRouter, Route, Routes } from 'react-router'

import NotFound from './common/NotFound'
import Blurhash from './blurhash/Blurhash'
import Latex from './latex/Latex'
import Home from './Home'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blurhash' element={<Blurhash />} />
                <Route path='/latex' element={<Latex />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
