import { useState } from "react"

const ListRender = () => {
    const [lista] = useState(["zé", "jão", "cleitom", "maria"])

    const [users] = useState([
        {id: 168165, name: 'pedro', age: 78},
        {id: 151846, name: 'carlos', age: 32},
    ])

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
    </div>
  )
}

export default ListRender