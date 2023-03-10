import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function NotePage({ update, note, deleteNote }) {
    const navigate = useNavigate();
    const { noteId } = useParams();

    const [title, setTitle] = useState(note[noteId - 1].title);
    const [content, setContent] = useState(note[noteId - 1].content);
    const [displayed, setDisplayed] = useState(note[noteId - 1].displayContent);
    const [time, setTime] = useState(note[noteId - 1].time);

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
        setTitle(newTitle)
    }

    const updateContent = (newContent) => {
        setContent(newContent)
        updateDisplayed(newContent)
    }

    const updateDisplayed = (newDisplayContent) => {
        setDisplayed(newDisplayContent.replace(/(<([^>]+)>)/ig, ''))
    }

    const updateTime = (newTime) => {
        setTime(newTime)
    }

    return (
        <>
            <div className="note-body-header">
                <div className="title-content">
                    <input type="text" id="text" className="title-text" placeholder='Untitled' onChange={(e) => updateTitle(e.target.value)} defaultValue={note[noteId - 1].title}></input>
                    <input type="datetime-local" id="date-time" className="date-time" placeholder={formatDate(Date.now())} onChange={(e) => updateTime(e.target.value)} defaultValue={note[noteId - 1].time}></input>
                </div>
                <div className="button-div">
                    <button className="save" onClick={() => { update(noteId, title, content, displayed, time); navigate(`/notes/${noteId}`) }}>Save</button>
                    <button className="delete" onClick={() => { if (window.confirm("Are you sure")) { deleteNote(Number(noteId)); navigate(`/notes`) } }}>Delete</button>
                </div>
            </div>

            <div className="note-body-editor" onChange={(e) => updateContent(e.target.value)}>
                <ReactQuill className='note-body-editor' onChange={updateContent} placeholder='Type your note here...' defaultValue={note[noteId - 1].content} />
            </div>
        </>
    );
};

export default NotePage;