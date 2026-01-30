import { css } from "lit";

export const SemaButtonStyles = css`
	/* ---------------- GENERAL STYLES  ------------------- */

	a {
		text-decoration: none;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 8px;
		cursor: pointer;
		font-weight: 600;
		outline: none;
		padding: 0.6rem 1.2rem;
		font-size: var(--btn-font-size);
		border: 1px solid transparent;
		width: var(--btn-width);
		font-family:
			"Inter",
			system-ui,
			-apple-system,
			sans-serif;
	}

	.btn:hover {
		border: 1px solid #b3b3b3;
	}

	/* ---------------- PRIMARY BUTTON STYLES  ------------------- */

	.btn-primary {
		background: #da2b48;
		color: #f9fafb;
	}

	.btn-primary:hover {
		background: #f9fafb;
		color: #da2b48;
	}

	.btn-custom {
		background: var(--btn-primary-color);
		color: var(--btn-secondary-color);
	}
	.btn-custom:hover {
		background: var(--btn-secondary-color);
		color: var(--btn-primary-color);
	}

	/* ---------------- OUTLINE BUTTON STYLES  ------------------- */

	.btn-outline {
		background: #f9fafb;
		color: #da2b48;
		border: 1.5px solid #da2b48;
	}

	.btn-outline:hover {
		background: #da2b48;
		color: #f9fafb;
		border: 1.5px solid #da2b48;
	}

	.btn-outline-custom {
		background: var(--btn-secondary-color);
		color: var(--btn-primary-color);
		border: 1.5px solid var(--btn-primary-color, currentColor);
	}

	.btn-outline-custom:hover {
		background: var(--btn-primary-color);
		color: var(--btn-secondary-color);
		border: 1.5px solid var(--btn-primary-color, currentColor);
	}

	/* ---------------- GHOST BUTTON STYLES  ------------------- */

	.btn-ghost {
		color: #999999;
	}

	.btn-ghost:hover {
		color: #da2b48;
	}

	.btn-ghost-custom {
		color: var(--btn-primary-color);
	}

	.btn-ghost-custom:hover {
		color: var(--btn-secondary-color);
	}
`;
