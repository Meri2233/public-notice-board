import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase.config';

export default function PostNotice() {
    let navigate = useNavigate();
    async function addNewNotice(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        try {
            let date = new Date();
            const docRef = await addDoc(collection(db, "notices"), {
                message: data.get('message'),
                title: data.get('title'),
                date: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
                reports: 0
            });
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
                <label htmlFor="title">Message Title</label>
                <input type="text" id='title' name='title' className='title' /><br />
                <label htmlFor="message">Message</label>
                <input type="text" id='message' name='message' className='message' /><br />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}
