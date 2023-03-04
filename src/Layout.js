import { Outlet } from "react-router-dom";
import NoteColumn from "./components/NoteColumn";
import NotePage from "./components/NotePage";

function Layout() {
    return (
        <>
            <header class="nav">
                <nav class="nav-bar">
                    <span class="nav-element1 menu-icon">
                        <h1 class="menu-icon">&#9776;</h1>
                    </span>
                    <span class="nav-element2">
                        <h1 class="main-header">Lotion</h1>
                        <h3 class="sub-header">Like Notion, But Worse</h3>
                    </span>
                    <span class="nav-element3"></span>
                </nav>
            </header>

            <main class="notes">
                <NoteColumn />
                <NotePage />
            </main>
        </>
    );
};

export default Layout;