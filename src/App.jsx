import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from "./components/Header";
import Home from './pages/Home';
import ScriptAtividade1 from './pages/Atividade1';
import Atividade1 from './pages/Atividade1';
import Atividade2 from './Pages/Atividade2';
import Atividade3 from './Pages/Atividadae3';

function App() {
    return (
        <>
        <Header />
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
        {/* <Footer/> */}

         </>
    )
}

export default App
