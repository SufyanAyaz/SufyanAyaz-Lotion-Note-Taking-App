import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Notes from "./Notes";
import NotePage from "./NotePage";

function Layout({ note, createNote, num }) {
    const navigate = useNavigate();
    // console.log(num)
    const changePage = () => {
        navigate(`/notes/${num}`)
    }
    // const [note, setNote] = useState([]);

    // const creatNote = () => {
    //     const newNoteInfo = {
    //         noteId: uuid(),
    //         title: "Untitled",
    //         content: "...",
    //         time: Date.now()
    //     };

    //     setNote([newNoteInfo, ...note]);
    // };

    return (
        <>
            <header className="nav">
                <nav className="nav-bar">
                    <span className="nav-element1 menu-icon">
                        <h1 className="menu-icon">&#9776;</h1>
                    </span>
                    <span className="nav-element2">
                        <h1 className="main-header">Lotion</h1>
                        <h3 className="sub-header">Like Notion, But Worse</h3>
                    </span>
                    <span className="nav-element3"></span>
                </nav>
            </header>

            <main className="notes">
                <section className="note-column">
                    <div className="note-header">
                        <h2 className="note-header">Notes</h2>
                        <h2 className="note-header-icon" id="create-note" onClick={() => { createNote(); navigate(`/notes/${num}/edit`) }}>&#43;</h2>
                    </div>
                    <div className="note-collection" id="note-collection">
                        {note.map((note) => {
                            return (<>
                                <button className="note" key={num} onClick={changePage}>
                                    <div className="note">
                                        <div>
                                            <h2>{note.title}</h2>
                                        </div>

                                        <div>
                                            <p>{note.content}</p>
                                        </div>
                                    </div>
                                </button>
                            </>)
                        })}
                    </div>
                    {/* <NoteColumn note={note} createNote={creatNote} /> */}
                </section>

                <section className="notes">
                    <Outlet />
                </section>
            </main>
        </>
    );
};
export default Layout;