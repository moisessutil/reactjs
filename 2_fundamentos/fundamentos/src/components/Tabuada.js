const Tabuada = () => {

    var dado = 10
    var resultado

    for (var i=1;i<=10;i++){
        resultado = dado * i
        console.log = `${dado} * ${i} = ${resultado}`
    }

    return (
        <div>
            <p>{console.log}</p>
        </div>
    )
}

export default Tabuada;