import React from 'react'
import { useDispatch } from 'react-redux'
import { report } from '../slices/noticeSlice';

export default function NoticeCard({ title, description, date, index }) {
    let dispatch = useDispatch();

    return (
        <div className='noticecard'>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="footer">
                <p>Posted At: {date}</p>
                <button className='flagbutton' onClick={() => dispatch(report(index))}><img src="./report.png" alt="Report" className='flag' /></button>
            </div>
        </div>
    )
}
