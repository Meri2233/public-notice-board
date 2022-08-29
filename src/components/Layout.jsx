import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='layout'>
            <div className='header'>
                <h2>Public Notice Board</h2>
            </div>
            <Outlet />
        </div>
    )
}
