import { useState } from "react"


const UserDetails = () => {
    const [pessoas, setPessoas] = useState([
        {id: 1, nome: 'Carlos', idade: 20, direcao: true},
        {id: 2, nome: 'Pedro', idade: 15, direcao: false},
        {id: 3, nome: 'Enzo', idade: 12, direcao: false}
    ])

  return (
    <div>
        <h1>Pessoas</h1>
        <ul>
            {pessoas.map((pessoas) => (
                <>
                <li key={pessoas.id}>{pessoas.nome} - {pessoas.idade} - {pessoas.idade >= 18 ? ('Pode dirigir') : ('Não pode dirigir')}</li>
                </>

            ))}
        </ul>
    </div>
  )
}

export default UserDetails