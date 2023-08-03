const Challend = () => {
    const a = 25
    const b = 60

    const Resultado = () => {
        let resultado = a + b
        console.log(resultado)
    }

    return (
        <div>
            <div>
                <h1>{a}<br /> + <br />{b}</h1>
            </div>
            <div>
                <button onClick={Resultado}>Resultado</button>
            </div>
        </div>
    )
}

export default Challend