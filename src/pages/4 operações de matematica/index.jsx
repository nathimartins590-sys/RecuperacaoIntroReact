import { useState } from 'react';
import './style.css';

function Operacoesdematematica() {
    const [numero, setNumero] = useState("")
    const [outronumero, setOutronumero] = useState("")
    const [resultado, setResultado] = useState()
    const [soma, setSoma] = useState("+")
    const [subtracao, setSubtracao] = useState("-")
    const [multiplicacao, setMultiplicacao] = useState("*")
    const [divisao, setDivisao] = useState("/")

    function handleSoma(event) {
        event.preventDefault();
        console.log(numero, outronumero)
        setResultado(Number(numero) + Number(outronumero));
    }

    function handleSubtracao(event) {
        event.preventDefault();
        console.log(numero,outronumero)
        setResultado(Number(numero) - Number(outronumero));
    }

    function handleMultiplicacao(event) {
        event.preventDefault();
        console.log(numero,outronumero)
        setResultado(Number(numero) * Number(outronumero));
    }

    function handleDivisao(event) {
        event.preventDefault();
        console.log(numero,outronumero)
        setResultado(Number(numero) / Number(outronumero));
    }

    return (
        <>
          <div>
            <div>
                <input
                    type="text"
                    value={numero}
                    onChange={(event) => setNumero(event.target.value)}
                />
                <input
                    type="text"
                    value={outronumero}
                    onChange={(event) => setOutronumero(event.target.value)}
                />

            </div>
          </div>
          <p>{resultado}</p>

          <button type="onsubmit">{soma}</button>
          <button type="onsubmit">{subtracao}</button>
          <button type="onsubmit">{multiplicacao}</button>
          <button type="onsubmit">{divisao}</button>
        </>
    )
}

export default Operacoesdematematica