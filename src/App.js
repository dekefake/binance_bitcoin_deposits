import './App.css';
import TransactionsList from './TransactionsList';

import {WalletChatWidget} from 'react-wallet-chat-v0'
import 'react-wallet-chat-v0/dist/index.css'

const binance_address = '34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo';

function App() {
  return (
    <div className="App">
      <header className="App-header box">
        <h1>Binance BTC deposits to {binance_address}</h1>
      </header>
      <TransactionsList address={binance_address}/>
      <WalletChatWidget />
    </div>
  );
}

export default App;
