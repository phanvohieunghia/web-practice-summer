import './style.scss';

const Table = (props) => {
	const { data, column } = props;

	return (
		<table className="_table">
			<thead>
				<tr>
					{column.map((header, i) => (
						<th key={i}>{header.header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row, i) => {
					return (
						<tr key={i}>
							{column.map((cell, j) => {
								return <td key={j}>{row[cell.key]}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
