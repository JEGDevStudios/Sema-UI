import { LitElement, html, css } from "lit";

export class SemaButton extends LitElement {
	static get is() {
		return "sema-button";
	}

	static styles = css`
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
			background: #f9fafb;
			color: #ef4444;
		}

		.btn-primary {
			background: #ef4444;
			color: #f9fafb;
		}

		.btn-custom {
			background: var(--btn-bg-color);
			color: var(--btn-text-color);
		}
		.btn-custom:hover {
			background: var(--btn-text-color);
			color: var(--btn-bg-color);
		}
	`;

	static properties = {
		kind: { type: String },
		custom: { type: Boolean },
		firstColor: { type: String },
		secondaryColor: { type: String },
		size: { type: String },
		fontSize: { type: String },
		textLabel: { type: String },
		url: { type: String },
		target: { type: String },
	};

	constructor() {
		super();
		this.kind = "";
		this.custom = "";
		this.firstColor = "";
		this.secondaryColor = "";
		this.size = "";
		this.fontSize = "";
		this.textLabel;
		this.url;
		this.target = "_self";
	}

	render() {
		const isCustomColor = this.custom
			? `--btn-bg-color: ${this.firstColor}; --btn-text-color: ${this.secondaryColor};`
			: "";

		let sizeValue = "120px";
		if (this.size === "sm") sizeValue = "80px";
		else if (this.size === "md") sizeValue = "120px";
		else if (this.size === "lg") sizeValue = "160px";
		else if (this.size === "full") sizeValue = "100%";

		const isCustomSize = `--btn-width: ${sizeValue};`;

		let fontValue = "1rem";
		if (this.fontSize === "sm") fontValue = "0.8rem";
		else if (this.fontSize === "md") fontValue = "1rem";
		else if (this.fontSize === "lg") fontValue = "1.5rem";
		else if (this.fontSize === "xl") fontValue = "2rem";

		const isCustomFontSize = `--btn-font-size: ${fontValue}`;

		return this.kind === "link"
			? html`
					<a
						style="${isCustomColor}${isCustomSize}${isCustomFontSize}"
						href="${this.url}"
						title="${this.textLabel}"
						target="${this.target}"
						class="btn ${this.custom ? "btn-custom" : "btn-primary"}"
						>${this.textLabel}
					</a>
				`
			: html`
					<button
						style="${isCustomColor}${isCustomSize}${isCustomFontSize}"
						class="btn ${this.custom ? "btn-custom" : "btn-primary"}"
						title="${this.textLabel}"
					>
						${this.textLabel}
					</button>
				`;
	}
}
customElements.define(SemaButton.is, SemaButton);
