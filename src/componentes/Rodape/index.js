import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://facebook.com" target="_blank">
                        <img src="./imagens/facebook.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" target="_blank">
                        <img src="./imagens/twitter.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/kelvynxavier" target="_blank">
                        <img src="./imagens/instagram.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="./imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por <strong>Kelvyn Xavier</strong>.
            </p>
        </section>
    </footer>)
}

export default Rodape