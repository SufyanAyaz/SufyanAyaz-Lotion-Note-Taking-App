import { Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Layout from "./Layout";

function App() {
  return <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Navigate to="/notes" replace={true} />}>
        <Route path="notes" element={<Layout />} />
      </Route>
    </Route>
  </Routes>;
}

export default App;
