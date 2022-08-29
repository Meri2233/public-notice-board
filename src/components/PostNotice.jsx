import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase.config';
import { useDispatch } from 'react-redux';
import { addnotices } from '../slices/noticeSlice';

export default function PostNotice() {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    async function addNewNotice(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let date = new Date();
        let obj = {
            message: data.get('message'),
            title: data.get('title'),
            date: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
            reports: 0
        }

        try {
            const docRef = await addDoc(collection(db, "notices"), obj);
            obj.id = docRef.id;
            dispatch(addnotices(obj));
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        navigate("/", { replace: true });
    }

    return (
        <div className='postnotice'>
            <form onSubmit={(e) => {
                addNewNotice(e)
            }}>
                
                <div className="entry">
                    <label htmlFor="title" className='titlelabel'>Message Title</label>
                    <input type="text" id='title' name='title' className='title' /><br />
                </div>
                <div className="entry">
                    <label htmlFor="message" className='messagelabel'>Message</label>
                    <input type="text" id='message' name='message' className='message' /><br />
                </div>
                <div className="button">
                    <button type='submit' className='submit'>Add</button>
                </div>

            </form>
        </div>
    )
}
