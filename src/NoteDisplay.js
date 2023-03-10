import { useParams, useNavigate } from "react-router-dom";
function NoteDisplay({ note, num, deleteNote }) {
    const navigate = useNavigate();
    const { noteId } = useParams();

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

    return (
        <>
            <div className="note-body-header">
                <div className="title-content">
                    <div className="title-display-text">{note[noteId - 1].title}</div>
                    <div className="time-display-text">{formatDate(note[noteId - 1].time)}</div>
                </div>
                <div className="button-div">
                    <button className="edit" onClick={() => { navigate(`/notes/${note[noteId - 1].noteNum}/edit`) }}>Edit</button>
                    <button className="delete" onClick={() => { if (window.confirm("Are you sure")) { deleteNote(Number(noteId)); navigate(`/notes`) } }}>Delete</button>
                </div>
            </div>

            <div className="note-body-display" id="body-display" dangerouslySetInnerHTML={{ __html: note[noteId - 1].content }}>
            </div>
        </>
    );
};

export default NoteDisplay;