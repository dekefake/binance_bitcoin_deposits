export default function Button({ children, onSmash }){
	return (
		<button onClick={onSmash}>
			{children}
		</button>
	);
}