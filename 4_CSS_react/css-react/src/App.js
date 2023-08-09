import './App.css';
import MyComponent from './components/MyComponent';
import useState from 'react';

function App() {
  const n = 15
  {/*const [name] = useState('Pedro')*/}

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
      {/*<h2 style={name === 'Pedro' ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinâmico</h2>*/}
    </div>
  );
}

export default App;
