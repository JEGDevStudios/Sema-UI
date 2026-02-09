import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("sema-card-feature")
export class SemaCardFeature extends LitElement {
	@property({ type: String }) color?: string;
	@property({ type: String, reflect: true }) theme: string = "light";
	@property({ type: String, reflect: true }) align?: string;
	@property({ type: String, reflect: true }) hover: string = "on";
	@state() _hasIcon: boolean = false;

	static styles = css`
		:host {
			display: block;
			--card-primary: var(--primary, #da2b48);
			--card-border: var(--border-color, #e5e7eb);
			--card-text: var(--text-main, #171212);
			--card-bg: #ffffff;
		}

		:host([theme="dark"]) {
			--card-border: #333;
			--card-text: #ffffff;
			--card-bg: #1f2937;
		}

		.card {
			padding: 1.5rem;
			background: var(--card-bg);
			border: 1px solid var(--card-border);
			border-radius: 4px;
			transition: border-color 0.2s ease;
			height: 100%;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
		}

		:host([hover="on"]) .card:hover {
			border-color: var(--card-primary);
		}

		:host([align="center"]) .header {
			justify-content: center;
		}

		:host([align="right"]) .header {
			justify-content: flex-end;
			flex-direction: row-reverse;
		}

		:host([align="center"]) .card {
			text-align: center;
		}

		:host([align="right"]) .card {
			text-align: right;
		}

		.header {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			margin-bottom: 0.5rem;
		}

		.title {
			font-size: 1.1rem;
			font-weight: 700;
			color: var(--card-text);
			margin: 0;
		}

		.icon {
			display: flex;
			align-items: center;
			justify-content: center;
			color: var(--card-primary);
			width: 24px;
			height: 24px;
		}

		.icon ::slotted(svg) {
			width: 100%;
			height: 100%;
		}

		.icon[hidden] {
			display: none;
		}

		.content {
			font-size: 0.9rem;
			color: var(--card-text);
			opacity: 0.7;
			line-height: 1.5;
			flex: 1;
		}

		.content ::slotted(p) {
			margin: 0;
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

	_handleIconSlotChange(e: Event) {
		const slot = e.target as HTMLSlotElement;
		this._hasIcon = slot.assignedElements({ flatten: true }).length > 0;
	}

	render() {
		const style = this.color ? `--card-primary: ${this.color};` : "";

		return html`
			<div class="card" style="${style}">
				<div class="header">
					<div class="icon" ?hidden="${!this._hasIcon}">
						<slot
							name="icon"
							@slotchange="${this._handleIconSlotChange}"
						></slot>
					</div>
					<h3 class="title">
						<slot name="title"></slot>
					</h3>
				</div>
				<div class="content">
					<slot></slot>
				</div>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"sema-card-feature": SemaCardFeature;
	}

	namespace JSX {
		interface IntrinsicElements {
			"sema-card-feature": {
				color?: string;
				theme?: "light" | "dark" | string;
				align?: "center" | "right" | string;
				hover?: "on" | "off" | string;

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
