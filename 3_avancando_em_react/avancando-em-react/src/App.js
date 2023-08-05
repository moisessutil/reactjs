import { useState } from 'react';
import './App.css';

import City from './asset/city.jpg';
import ConditionalRender from './componts/ConditionalRender';
import ListRender from './componts/ListRender';
import ManageData from './componts/ManageData';
import ShowUserName from './componts/ShowUserName';

function App() {
  const name = 'Jão'
  const [userName] = useState('Pedro')

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
      <ShowUserName name={userName} />
    </div>
  );
}

export default App;
