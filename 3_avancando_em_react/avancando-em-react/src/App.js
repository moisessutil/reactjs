import { useState } from 'react';
import './App.css';

import City from './asset/city.jpg';
import ConditionalRender from './componts/ConditionalRender';
import ListRender from './componts/ListRender';
import ManageData from './componts/ManageData';
import ShowUserName from './componts/ShowUserName';
import CarDetalies from './componts/CarDetalies';
import Fragment from './componts/Fragment';
import Container from './componts/Container';
import ExecuteFunction from './componts/ExecuteFunction';
import Message from './componts/Message';
import ChanseMessegeState from './componts/ChanseMessegeState';

function App() {
  //const name = 'Jão'
  const [userName] = useState('Pedro')

  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Amarelo', newCar: true, km: 0 },
    { id: 1, brand: 'Audi', color: 'Preto', newCar: true, km: 0 },
    { id: 1, brand: 'Honda', color: 'Branco', newCar: false, km: 5864 },
  ]

  function showMessage() {
    console.log('Evento')
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  } 

  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/*imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="paisagem" />
      </div>

      {/*imagens em asset*/}
      <div>
        <img src={City} alt="cidade" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* props */}
      <ShowUserName name={userName} />

      {/* destructuring*/}
      <CarDetalies brand='VW' km={100000} color='Vermelho' newCar={false} />

      {/* reaproveitando */}
      <CarDetalies brand='Ford' km={6900} color='Azul' newCar={false} />
      <CarDetalies brand='Chevrolet' km={0} color='Branco' newCar={true} />
      <CarDetalies brand='Fiat' km={0} color='Cinza' newCar={true} />

      {/* loop em arrey de objeto */}
      {cars.map((car) => (
        <CarDetalies key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
      ))}

      {/* fragment */}
      <Fragment />

      {/* children */}
      <Container>
        <p>Esse é o conteudo</p>
      </Container>

      {/* executar função em props */}
      <ExecuteFunction MyFunction={showMessage} />

      {/* state lift */}
      <Message msg={message} />
      <ChanseMessegeState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
