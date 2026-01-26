import { css } from "lit";

export const SemaAlertsStyles = css`
	:host {
		font-family: Arial, Helvetica, sans-serif;
	}

	.__section {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: auto;
		border-radius: 8px;
		box-sizing: border-box;
		overflow: hidden;
		padding: 1rem 1rem 1rem 0;
	}

	.__title {
		margin-left: 1rem;
		margin-top: 0;
		margin-bottom: 0.5rem;
		font-size: 1rem;
		font-weight: bold;
	}
	.__paragraph {
		margin-left: 1rem;
		margin-top: 0;
		margin-bottom: 0;
		font-size: 0.9rem;
	}

	.__error {
		border: 1px solid #dc2626;
		border-left-width: 4px;
		background: #450a0a;
		-webkit-backdrop-filter: blur(4px);
		backdrop-filter: blur(4px);

		.__title {
			color: #dc2626;
		}
		.__paragraph {
			color: #fff;
		}
	}

	.__warn {
		border: 1px solid #ffbb27;
		border-left-width: 4px;
		background: #775a1a;
		-webkit-backdrop-filter: blur(4px);
		backdrop-filter: blur(4px);

		.__title {
			color: #ffbb27;
		}
		.__paragraph {
			color: #fff;
		}
	}

	.__info {
		border-left: 4px solid #3ffc38;
		border: 1px solid #3ffc38;
		border-left-width: 4px;
		background: #f1f1f1;
		-webkit-backdrop-filter: blur(4px);
		backdrop-filter: blur(4px);

		.__title {
			color: #0a0a0a;
		}
		.__paragraph {
			color: #585858;
		}
	}

	@media (prefers-color-scheme: dark) {
		.__info {
			background: transparent;

			.__title {
				color: #e0e0e0;
			}
			.__paragraph {
				color: #fff;
			}
		}
	}
`;
