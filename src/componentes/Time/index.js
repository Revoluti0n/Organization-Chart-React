import './Time.css'

// Dumb component (componente visual, estático)
// Componente "Time" (card contendo os colaboradores do time)
const Time = (props) => {

    const css_card = { backgroundColor: props.corDoCard }
    const css_linha = { borderColor: props.corDoFundo }

    return (
        <section className='time' style={css_card}>
            <h3 style={css_linha}>{props.nome}</h3>
            
        </section>
    )
}

export default Time