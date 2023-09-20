// import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {
    // console.log(props)

    const placeholderModificada = `${props.placeholder}...`
    
    // let valor = 'Kelvyn Xavier'
    
    // Hook
    // const [valor, setValor] = useState('')

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
        // setValor(evento.target.value)
        // console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto
