import Colaborador from '../Colaborador'
import './Time.css'

// Dumb component (componente visual, estático)
// Componente "Time" (card contendo os colaboradores do time)
const Time = (props) => {

    const css_card = { backgroundColor: props.corDoCard }
    const css_linha = { borderColor: props.corDoFundo }

    return (
        // Renderização condicional no React
        (props.colaboradores.length > 0) && 
        <section className='time' style={css_card}>
            <h3 style={css_linha}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    corFundo={props.corDoFundo}
                />)}
            </div>
        </section>
    )

    // Outra forma, usando operador ternário
    // return (
    //     // Renderização condicional no React
    //     (props.colaboradores.length > 0) ? 
    //     <section className='time' style={css_card}>
    //         <h3 style={css_linha}>{props.nome}</h3>
    //         <div className='colaboradores'>
    //             {props.colaboradores.map(colaborador => <Colaborador
    //                 key={colaborador.nome}
    //                 nome={colaborador.nome}
    //                 cargo={colaborador.cargo}
    //                 imagem={colaborador.imagem}
    //             />)}
    //         </div>
    //     </section>
    //     : '' // Aqui pode retornar um placeholder (um componente vazio)
    // )
}

export default Time