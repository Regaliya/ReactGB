import './components/MyComponent/style.css';

function App({name}) {
  return (
    <div className="App">
     <header className="App-header">
       My First React App
       <h3 className="App-header-title">Hello, {name}!</h3>
     </header>
    </div>
  );
}

export default App;
