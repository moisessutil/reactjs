import './App.css';

import City from './asset/city.jpg';
import ListRender from './componts/ListRender';
import ManageData from './componts/ManageData';

function App() {
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
    </div>
  );
}

export default App;
