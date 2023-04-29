import { useState } from 'react';
import Button from './Button';
import Transaction from './Transaction';
import offline_data from './offline_data';
import './TransactionsList.css';

function FetchTransactions(){
	// TODO : FETCH TRANSACTIONS FROM SOME API INSTEAD OF USING A STATIC JSON
	/*
	fetch(`https://blockchain.info/rawaddr/${binance_address}`)
	*/
	return offline_data();
}

function RefreshList({ children, onSmash }){
	return (
		<div className="RefreshList box box_small" onClick={onSmash}>
			{children}
		</div>
	);
}

export default function TransactionsList({address}){
	const [transactions, SetTransactions ] = useState({address: address, txs:[]});

	return (
		<div className="TransactionsList">
			<RefreshList onSmash={() => { SetTransactions(FetchTransactions()) }}>
				Refresh List
			</RefreshList>
			<div className="btc_txs">
				{
					transactions.txs.map(tx => <Transaction to_addr={transactions.address} tx={tx} key={tx.hash}/>)
				}
				{
					console.log(transactions.txs[0])
				}
			</div>

		</div>
	);
}