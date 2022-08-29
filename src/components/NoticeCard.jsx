import React from 'react'
import { useDispatch } from 'react-redux'
import { report } from '../slices/noticeSlice';
import {doc,deleteDoc} from "firebase/firestore";
import { db } from '../firebase.config';

export default function NoticeCard({ title, description, date, index,id }) {
    let dispatch = useDispatch();
    
    async function deletenotice(id) {
        try {
            await deleteDoc(doc(db, "notices", id));
          } catch (e) {
            alert("Error deleting document: ", e.message);
          }
    }
    
    return (
        <div className='noticecard'>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="footer">
                <p>Posted At: {date}</p>
                <button className='flagbutton' onClick={() => {
                    dispatch(report(index))
                    deletenotice(id)
                }}><img src="./report.png" alt="Report" className='flag' /></button>
            </div>
        </div>
    )
}
