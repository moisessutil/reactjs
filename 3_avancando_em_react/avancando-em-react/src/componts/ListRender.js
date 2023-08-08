import { useState } from "react"

const ListRender = () => {
    const [lista] = useState(["zé", "jão", "cleitom", "maria"])

    const [users, setUsers] = useState([
        {id: 1, name: 'pedro', age: 78},
        {id: 2, name: 'carlos', age: 32},
        {id: 3, name: 'marcão', age: 25}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) =>  randomNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>
            {lista.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((users) => (
                <li key={users.id}>{users.name} - {users.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random</button>
    </div>
  )
}

export default ListRender
