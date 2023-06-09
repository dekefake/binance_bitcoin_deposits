import './Transactions.css';

export default function Transaction({to_addr, tx}){
	// 1 BTC = 10**8 sats
	const BTC_DIGITS = 8;

	// Check if this transaction included a deposit to `to_addr`
	let deposit_outs = tx.out.filter(o => o.addr===to_addr);

	// Bitcoin transactions usually have a bunch of `in` and `out` addresses, but all `out` are distinct (same goes with `in` addresses).
	let tx_valid = deposit_outs.length===1;
	
	return tx_valid && (
		<div className="btc_tx box box_small">
			<span className="btc_tx_timestamp">
				<a target="_blank" href={`https://www.blockchain.com/explorer/blocks/btc/${tx.block_index}`}>
					{tx.block_index}
				</a>
				&nbsp;~ {new Date(tx.time*1000).toLocaleString()}
			</span>
			🔗&nbsp;<a target="_blank" className="btc_tx_hash" href={`https://www.blockchain.com/explorer/transactions/btc/${tx.hash}`}>{tx.hash}</a>
			<span className="btc_tx_amount">{(deposit_outs[0].value / 10**BTC_DIGITS).toFixed(8)} BTC</span>
		</div>
	);
}