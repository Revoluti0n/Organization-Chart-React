import './Formulario.css'
import { useState } from 'react'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao';

const Formulario = (props) => {

    // Ctrl + Alt -> Seleção multípla de linhas
    // const times = [
    //     'Programação',
    //     'Front-End',
    //     'Data Science',
    //     'DevOps',
    //     'UX e Design',
    //     'Mobile',
    //     'Inovação e Gestão'
    // ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    // https://developer.mozilla.org/en-US/docs/Web/Events
    // https://www.alura.com.br/artigos/convencoes-nomenclatura-camel-pascal-kebab-snake-case
    // https://pt-br.legacy.reactjs.org/docs/handling-events.html
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, // nome: nome,
            cargo, // cargo: cargo,
            imagem, // imagem: imagem,
            time // time: time
        })
        // console.log('Form foi submetido => ', nome, cargo, imagem, time)

        // Limpar os entryboxes após clicar em "Salvar":
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da sua imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                {/* Poderia ser: <Botao texto="Criar Card"/> e depois passar props.texto no index.js do Botao*/}
                <Botao>
                    Criar Card
                </Botao>

            </form>
        </section>
    )
}

export default Formulario