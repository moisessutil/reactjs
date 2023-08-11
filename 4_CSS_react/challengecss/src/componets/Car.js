import { useState } from "react"
import styles from './Car.module.css'

const Car = () => {
    const [cars, setCars] = useState([
        {id: 1, car: 'Gol', brand: 'VW'},
        {id: 2, car: 'Monza', brand: 'Chevrolet'},
        {id: 3, car: 'Opala', brand: 'Chevrolet'},
    ])

  return (
    <div className={styles.style}>
        {cars.map((cars) => (
            <>
            <h2>Carro: {cars.car}</h2>
            <h3>Marca: {cars.brand}</h3>
            </>
        ))}
    </div>
  )
}

export default Car