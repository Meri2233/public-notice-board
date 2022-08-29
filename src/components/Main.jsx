import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Notices from './Notices'
import PostNotice from './PostNotice'

export default function Main() {
    return (
        <div className='container'>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Notices/>}/>
                    <Route path="/postnotice" element={<PostNotice/>}/>
                </Route>
            </Routes>
        </div>
    )
}
