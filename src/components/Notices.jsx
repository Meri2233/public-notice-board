import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import NoticeCard from './NoticeCard';
import { addnotices } from '../slices/noticeSlice';
import {collection, getDocs} from "firebase/firestore";
import { db } from '../firebase.config';

export default function Notices() {
    /*let dispatch = useDispatch();

    async function loadnotices() {
        const querySnapshot = await getDocs(collection(db, "notices"));
        querySnapshot.forEach((doc) => {
            let notice = doc.data()
            notice.id = doc.id;
            dispatch(addnotices(notice));
        });
    }
    loadnotices();*/

    const notices = useSelector(state => state.notice.notices);

    return (
        <div className='notices'>
            <button className='addnew'><Link to="/postnotice">Add New</Link></button>
            {notices.map((el, index) => { return <NoticeCard title={el.title} description={el.message} date={el.date} index={index} id={el.id} /> })}
        </div>
    )
}
