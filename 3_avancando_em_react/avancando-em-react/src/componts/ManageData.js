import {useState} from 'react'

const ManageData = () => {
    let valor = 10

    const [number, setNumber] = useState(15)

  return (
    <div>
        <div>
            <p>Valor: {valor}</p>
            <button onClick={() => (valor = 15)}>Mudar valor</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(20)}>Mudar State</button>
        </div>
    </div>
  )
}

export default ManageData