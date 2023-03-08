import { useParams, useNavigate } from "react-router-dom";
function NoteDisplay({ note, num }) {
    const navigate = useNavigate();
    const { noteId } = useParams();


    // const x = note.find(note => note.noteNum === (noteId - 1))
    // console.log(x)
    // console.log(noteId);
    // console.log(note[noteId - 1]);
    // console.log(note[noteId - 1].title);

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
            <section className="notes">
                <div className="note-body-header">
                    <div className="title-content">
                        <div className="title-display-text">{note[noteId - 1].title}</div>
                        <div className="time-display-text">{formatDate(note[noteId - 1].time)}</div>
                    </div>
                    <div className="button-div">
                        <button className="edit" onClick={() => { navigate(`/notes/${num - 1}/edit`) }}>Edit</button>
                        <button className="delete">Delete</button>
                    </div>
                </div>

                <div className="note-body-display">
                    {note[noteId - 1].content}
                </div>
            </section>
        </>
    );
};

export default NoteDisplay;