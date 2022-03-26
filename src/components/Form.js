const Form = ({ fecId, setFecId, handleSubmit, cycleYear, setCycleYear }) => {
	return (
		<div>
			<a href="https://www.fec.gov/data/browse-data/?tab=candidates" target="_blank" rel="noopener noreferrer">
				GET FEC ID
			</a>
			<form onSubmit={handleSubmit}>
				<label>Enter candidate FEC ID</label>
				<input
					className="text-input"
					type="text"
					// defaultValue="P60007168"
					value={fecId}
					onChange={(e) => setFecId(e.target.value.toUpperCase())}
				/>

				<label>Enter cycle year</label>
				<input
					className="text-input"
					type="text"
					// placeholder="2020"
					value={cycleYear}
					// defaultValue='2020'
					onChange={(e) => setCycleYear(e.target.value)}
				/>
				<input className="button" type="submit" value="$$$" />
			</form>
		</div>
	);
};

export default Form;
