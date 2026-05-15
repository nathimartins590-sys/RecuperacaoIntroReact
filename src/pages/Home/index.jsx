import { Link } from 'react-router-dom';
import './style.css';

function Home() {
    return (
        <>
          <h2>Bem-vindo a Prova</h2>
          <Link to="/locaisdomundo">
          <button>Locais do Mundo</button>
          </Link>

          <Link to="/operacoesdematematica">
          <button>Operações de matematica</button>
          </Link>
        </>
    )
}

export default Home