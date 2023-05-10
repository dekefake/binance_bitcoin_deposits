import './App.css';
import TransactionsList from './TransactionsList';

const binance_address = '34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo';

function App() {
  return (
    <div className="App">
      <header className="App-header box">
        <h1>Binance BTC deposits to {binance_address}</h1>
      </header>
      <TransactionsList address={binance_address}/>
    </div>
  );
}

export default App;
