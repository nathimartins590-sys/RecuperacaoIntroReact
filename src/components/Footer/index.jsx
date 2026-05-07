import viteLogo from '../../../public/icons.svg'
import reactLogo from '../../assets/react.svg'
import './style.css'

export default function Header() {
    return (
        <header>
            <h1>Minha pagina react</h1>
            <img src={reactLogo} alt='Logo do React' />
            <img src={viteLogo} alt='Logo do Vite' />
        </header>
    )
}