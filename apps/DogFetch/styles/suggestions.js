import css from 'styled-jsx/css';

export default css`
	.Suggestions {
		border: 2px solid #cc071e;
		list-style: none;
		max-height: 150px;
		margin: 3px auto 0;
		overflow-y: auto;
		padding-left: 0;
		text-align: left;
		width: 100%;
	}

	.Suggestions li {
		border-bottom: 1px solid #888;
		cursor: pointer;
		font-size: 18px;
		padding: 5px 10px;
	}

	.Suggestions--active,
	.Suggestions li:hover {
		background-color: #cc071e;
		color: white;
	}
`;