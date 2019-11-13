import css from 'styled-jsx/css';

export default css`
	.Search {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}

	.Search label {
		display: block;
		margin-bottom: 15px;
	}

	.Search input {
		border: 2px solid #cc071e;
		border-radius: 0;
		color: #444;
		font-size: 16px;
		padding: 5px;
		height: 20px;
		width: 250px;
		-webkit-appearance: none;
	}

	.Search__history {
		margin-top: 15px;
	}

	.Search__result {
		margin-top: 15px;
		max-width: 250px;
	}

	@media (min-width: 500px) {
		.Search input {
			width: 500px;
		}
	}

	/*  Loading animation */

	.loading {
		animation: blink 1s linear infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
`;