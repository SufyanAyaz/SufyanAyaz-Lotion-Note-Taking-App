import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function NotePage({ update, num, note, deleteNote }) {
    const navigate = useNavigate();
    const { noteId } = useParams();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [time, setTime] = useState('');

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };

    const formatDate = (when) => {
        const formatted = new Date(when).toLocaleString("en-US", options);
        if (formatted === "Invalid Date") {
            return "";
        }
        return formatted;
    };

    const updateTitle = (newTitle) => {
        setTitle(newTitle ? newTitle : note[noteId - 1].title)
    }

    const updateContent = (newContent) => {
        // setContent(newContent.replace(/(<([^>]+)>)/ig, ''))
        setContent(newContent ? newContent : note[noteId - 1].content)
    }

    const updateTime = (newTime) => {
        // setTime(formatDate(Date.parse(newTime)))
        setTime(newTime ? newTime : note[noteId - 1].time)
    }

    return (
        <>
            <section className="notes">
                <div className="note-body-header">
                    <div className="title-content">
                        <input type="text" id="text" className="title-text" placeholder='Untitled' onChange={(e) => updateTitle(e.target.value)} defaultValue={note[noteId - 1].title}></input>
                        <input type="datetime-local" id="date-time" className="date-time" onChange={(e) => updateTime(e.target.value)} defaultValue={note[noteId - 1].time}></input>
                    </div>
                    <div className="button-div">
                        <button className="save" onClick={() => { update(noteId, title, content, time); navigate(`/notes/${noteId}`) }}>Save</button>
                        <button className="delete" onClick={() => { if (window.confirm("Are you sure")) { deleteNote(noteId); navigate(`/notes/${noteId >= 2 ? noteId - 1 : ""}`) } }}>Delete</button>
                    </div>
                </div>

                <div className="note-body-editor" onChange={(e) => updateContent(e.target.value)}>
                    <ReactQuill className='note-body-editor' onChange={updateContent} defaultValue={note[noteId - 1].content} />
                </div>
            </section>
        </>
    );
};

export default NotePage;