import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from "./components/Header";
import Home from './pages/Home';
import LocaisdoMundo from './pages/Locais do mundo';
import Operacoesdematematica from './pages/4 operações de matematica';

function App() {
    return (
        <>
        <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locaisdomundo" element={<LocaisdoMundo/>}/>
            <Route path="/operacoesdematematica" element={<Operacoesdematematica/>}/>
         </Routes>
        {/* <Footer/> */}

         </>
    )
}
export default App
