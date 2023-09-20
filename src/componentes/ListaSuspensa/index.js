import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    // console.log(props.itens)
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
                {/* Poderia ser:
                {props.itens.map(item => {
                    return <option>{item}</option>
                })} */}
            </select>
        </div>
    )
}

export default ListaSuspensa