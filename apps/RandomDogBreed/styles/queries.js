import css from 'styled-jsx/css';

export default css`
	.SavedQueries {
		width: 100%;
	}

	.SavedQueries h5 {
		margin-bottom: 10px;
		text-align: justify;
		position: relative;
	}

	.SavedQueries h5 > span {
		cursor: pointer;
		font-size: 13px;
		position: absolute;
		right: 0;
		text-decoration: underline;
	}

	.SavedQueries ul {
		list-style: none;
		overflow-y: auto;
		padding-left: 0;
		text-align: left;
	}

	.SavedQueries li {
		background: var(--palm-green);
		color: white;
		display: flex;
		align-items: center;
		font-size: 18px;
		margin-bottom: 5px;
		padding: 5px 10px;
		position: relative;
	}

	.SavedQueries__time-stamp {
		font-size: 12px;
		position: absolute;
		right: 35px;
	}

	.SavedQueries__delete {
		cursor: pointer;
		position: absolute;
		right: 10px;
	}
`;