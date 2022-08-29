import React from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase.config';
import { useDispatch, useSelector } from 'react-redux';
import { addnotices } from '../slices/noticeSlice';
import NoticeCard from './NoticeCard';

export default function Notices() {
    let dispatch = useDispatch();

    async function getNotices() {
        const querySnapshot = await getDocs(collection(db, "notices"));
        querySnapshot.forEach((doc) => {
            dispatch(addnotices(doc.data()));
        });
    }
    getNotices();

    const notices = useSelector(state => state.notice.notices);
    return (
        <div className='notices'>
            <button className='addnew'><Link to="/postnotice">Add New</Link></button>
            {notices.map((el, index) => { return <NoticeCard title={el.title} description={el.message} date={el.date} index={index} /> })}
        </div>
    )
}
