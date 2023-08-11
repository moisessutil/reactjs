import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15
  const name = 'Biel'
  const redTitle = false

  return (
    <div className="App">
      {/* css global */}
      <h1>React com CSS</h1>

      {/* css componente */}
      <MyComponent />
      <p>Esse paragrafo é do App.js</p>

      {/* inline style */}
      <p style={{ 
        color: 'blue', 
        padding: '10px', 
        borderTop: 'solid 3px red' }}>
          Esse elemento está sendo estilizado inline
          </p>

      {/* css inline dinamico */}
      <h2 style={n < 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinâmico</h2>
      <h2 style={name === 'Pedro' ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinâmico</h2>

      {/* css classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Aqui vai ter classes dinamicas</h2>

      {/* css modules */}
      <Title />
      <h1 className="my_title">Testando</h1>
    </div>
  );
}

export default App;
