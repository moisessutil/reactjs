const TempleteExpression = () => {

    const nome = 'Moises'
    const dados = {
        idade: 19
    }

    return (
        <div>
            <h1>Olá {nome}, tudo bem?</h1>
            <p>A sua idade é {dados.idade}</p>
            <p>{87 / 45}</p>
        </div>
    )
}

export default TempleteExpression;