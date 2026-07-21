
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import MascotasPage from './pages/MascotasPages';
import MascotasDetail from './components/mascotas/Mascotasdetail';
import ComentariosPage from "./pages/ComentariosPage";


function App() {
  return (
    <>
      <Router>
        <nav>
          <NavLink  to={"mascotas/"}>Mascotas</NavLink>
        </nav>

        

        <Routes>
          <Route path="mascotas/" element={<MascotasPage/>}/>
          <Route path="mascotas/:id" element={<MascotasDetail/>}/>
          <Route path="mascotas/:id/comentarios" element={<ComentariosPage />} />
        </Routes>

      </Router>
    </>
  )



}

export default App