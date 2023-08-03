const Events = () => {
    const MyEvent = (e) => {
        console.log('Ativou o evento')
    }

    const Renderizacao = (x) => {
        if (x) {
            return <h1>Pode renderizar isso</h1>
        } else {
            return <h1>Ou isso também</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={MyEvent}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique Aqui Também!</button>
            </div>
            {Renderizacao(true)}
            {Renderizacao(false)}
        </div>
    )
}

export default Events;