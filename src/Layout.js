import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Layout({ note, createNote, num, currentNote, setCurrentNote }) {
    const navigate = useNavigate();
    const changePage = (number) => {
        navigate(`/notes/${number}`)
    }

    const toggle = () => {
        document.getElementById("column").classList.toggle("column-hidden");
        document.getElementById("main-note-area").classList.toggle("main-hidden");
    }

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
            <header className="nav">
                <nav className="nav-bar">
                    <span className="nav-element1 menu-icon">
                        <h1 className="menu-icon" onClick={toggle}>&#9776;</h1>
                    </span>
                    <span className="nav-element2">
                        <h1 className="main-header">Lotion</h1>
                        <h3 className="sub-header">Like Notion, But Worse</h3>
                    </span>
                    <span className="nav-element3"></span>
                </nav>
            </header>

            <main className="notes">
                <section className="note-column" id="column">
                    <div className="note-header">
                        <h2 className="note-header">Notes</h2>
                        <h2 className="note-header-icon" id="create-note" onClick={() => { createNote(); setCurrentNote(num); navigate(`/notes/${num}/edit`) }}>&#43;</h2>
                    </div>
                    <div className="note-collection" id="note-collection">
                        {note.map((note) => {
                            return (<>
                                <button className={`note ${note.noteNum === currentNote && "selected"}`} key={num} onClick={() => { setCurrentNote(note.noteNum); changePage(note.noteNum) }}>
                                    <div className="note">
                                        <div className="note-sub">
                                            <h2 className="note-property">{note.title}</h2>
                                            <h3 className="note-property">{formatDate(note.time)}</h3>
                                            <p className="note-property" dangerouslySetInnerHTML={{ __html: note.displayContent.substring(0, 30) + "..." }}></p>
                                        </div>
                                    </div>
                                </button>
                            </>)
                        })}
                    </div>
                </section>

                <section className="notes" id="main-note-area">
                    <Outlet />
                </section>
            </main>
        </>

    )
};
export default Layout;