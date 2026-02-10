import { css } from "lit";

export const SemaButtonStyles = css`
	/* ---------------- GENERAL STYLES  ------------------- */

	a {
		text-decoration: none;
	}

	.btn {
		display: inline-flex;
		box-sizing: border-box;
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
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
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
		background: transparent;
		border: 1.5px solid #da2b48;
		color: #da2b48;
	}

	.btn-outline:hover {
		background: #da2b48;
		color: #f9fafb;
		border: 1.5px solid #da2b48;
	}

	.btn-outline-custom {
		background: transparent;
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
	:host([theme="dark"]) .btn-ghost {
		color: #a1a1aa;
	}
	:host([theme="dark"]) .btn-ghost:hover {
		color: #ffffff;
	}

	/* ---------------- MENU BUTTON STYLES  ------------------- */

	.btn-menu {
		background: transparent;
		color: var(--text-main, #171212);
		box-shadow: none;
		border: none;
		padding: 0.6rem;
		aspect-ratio: 1/1;
	}
	.btn-menu:hover {
		background: rgba(0,0,0,0.05);
	}
	:host([theme="dark"]) .btn-menu { color: #ffffff; }
	:host([theme="dark"]) .btn-menu:hover { background: rgba(255,255,255,0.1); }

	.btn-menu-custom {
		background: transparent;
		color: var(--btn-primary-color);
		box-shadow: none;
		border: none;
		padding: 0.6rem;
		aspect-ratio: 1/1;
	}
	.btn-menu-custom:hover {
		background: var(--btn-secondary-color);
		color: var(--btn-primary-color);
	}

	/* ---------------- NAV LINK STYLES  ------------------- */

	.btn-nav-link, .btn-nav-link-custom {
		background: transparent;
		box-shadow: none;
		border: none;
		color: #9ca3af; /* Gray inactive */
		text-decoration: underline;
		width: auto;
	}
	.btn-nav-link:hover, .btn-nav-link:active, .btn-nav-link:focus {
		color: var(--primary, #da2b48);
		border: none;
	}
	.btn-nav-link-custom:hover, .btn-nav-link-custom:active, .btn-nav-link-custom:focus {
		color: var(--btn-primary-color);
		border: none;
	}
	:host([theme="dark"]) .btn-nav-link {
		color: #d1d5db;
	}
	:host([theme="dark"]) .btn-nav-link:hover {
		color: #ffffff;
	}

	/* ---------------- ROUNDED VARIANTS ------------------- */

	.rounded-sm { border-radius: 4px; }
	.rounded-md { border-radius: 8px; }
	.rounded-lg { border-radius: 12px; }
	.rounded-xl { border-radius: 16px; }
	.rounded-full { border-radius: 9999px; }
	.rounded-circle { 
		border-radius: 50%; 
		padding: 0.1rem; 
		aspect-ratio: 1/1; 
	}
`;
