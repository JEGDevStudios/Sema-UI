import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("sema-card-info")
export class SemaCardInfo extends LitElement {
	@property({ type: String }) color?: string;
	@property({ type: String }) labelFontSize?: string;
	@property({ type: String, reflect: true }) size: string = "md";
	@property({ type: String, reflect: true }) theme: string = "light";
	@property({ type: Boolean, reflect: true }) filled: boolean = false;

	static styles = css`
		:host {
			display: block;
			--card-primary: var(--primary, #da2b48);
			--card-border: var(--border-color, #e5e7eb);
			--card-bg: var(--bg-light, #ffffff);
			--card-text: var(--text-main, #171212);
			--label-font-size: 32px;
			height: 100%;
		}

		:host([theme="dark"]) {
			--card-border: #333;
			--card-bg: #121212;
			--card-text: #ffffff;
		}

		.card {
			background: var(--card-bg);
			border: 1px solid var(--card-border);
			border-radius: 4px;
			padding: 1.5rem;
			display: flex;
			flex-direction: column;
			height: 100%;
			box-sizing: border-box;
			transition: border-color 0.2s ease;
		}

		.card:hover {
			border-color: var(--card-primary);
		}

		/* Filled variant */
		:host([filled]) .card {
			background: var(--card-primary);
			border-color: var(--card-primary);
		}
		:host([filled]) .title,
		:host([filled]) .content,
		:host([filled]) .label {
			color: #ffffff;
			opacity: 1;
		}

		.label {
			color: var(--card-primary);
			font-size: var(--label-font-size);
			margin-bottom: 0.5rem;
			display: inline-block;
			font-weight: 700;
		}

		.title {
			margin: 0.5rem 0;
			font-weight: 900;
			text-transform: uppercase;
			color: var(--card-text);
			font-size: 1rem;
		}

		.content {
			font-size: 0.875rem;
			color: var(--card-text);
			opacity: 0.7;
			margin: 0;
			line-height: 1.5;
		}

		.content ::slotted(p) {
			margin: 0;
		}

		/* Sizes */
		:host([size="sm"]) .card {
			padding: 1rem;
		}
		:host([size="sm"]) .label {
			font-size: 0.75rem;
			margin-bottom: 0.25rem;
		}

		:host([size="lg"]) .card {
			padding: 2rem;
		}
		:host([size="lg"]) .label {
			font-size: 1.25rem;
		}

		:host([size="xl"]) .card {
			padding: 3rem;
		}
		:host([size="xl"]) .label {
			font-size: 1.5rem;
		}

		:host([size="full"]) {
			width: 100%;
		}
	`;

	constructor() {
		super();
		this.theme =
			localStorage.getItem("theme") ||
			(window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light");
	}

	connectedCallback() {
		super.connectedCallback();
		document.addEventListener("toggle-theme", this._handleThemeUpdate);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		document.removeEventListener("toggle-theme", this._handleThemeUpdate);
	}

	_handleThemeUpdate = () => {
		this.theme = document.documentElement.getAttribute("data-theme") || "light";
	};

	render() {
		const colorStyle = this.color ? `--card-primary: ${this.color};` : "";
		const sizeStyle = this.labelFontSize
			? `--label-font-size: ${this.labelFontSize};`
			: "";

		return html`
			<div class="card" style="${colorStyle} ${sizeStyle}">
				<span class="label">
					<slot name="label"></slot>
				</span>
				<h4 class="title">
					<slot name="title"></slot>
				</h4>
				<div class="content">
					<slot></slot>
				</div>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"sema-card-info": SemaCardInfo;
	}

	namespace JSX {
		interface IntrinsicElements {
			"sema-card-info": {
				color?: string;
				labelFontSize?: string;
				"label-font-size"?: string;
				size?: "sm" | "md" | "lg" | "xl" | "full" | string;
				theme?: "light" | "dark" | string;
				filled?: boolean | string;

				children?: any;
				className?: string;
				style?: any;
				ref?: any;
				onClick?: (e: any) => void;
				[key: string]: any;
			};
		}
	}
}
