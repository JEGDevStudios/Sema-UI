import { LitElement, html, css } from "lit";
import { SemaButtonStyles } from "./sema-button.css.js";

export class SemaButton extends LitElement {
	static get is() {
		return "sema-button";
	}

	static styles = [SemaButtonStyles];

	static properties = {
		mode: { type: String },
		kind: { type: String },
		custom: { type: String },
		firstColor: { type: String },
		secondaryColor: { type: String },
		size: { type: String },
		fontSize: { type: String },
		textLabel: { type: String },
		url: { type: String },
		target: { type: String },
		altText: { type: String },
	};

	constructor() {
		super();
		this.mode = "";
		this.kind = "";
		this.custom = "off";
		this.firstColor = "";
		this.secondaryColor = "";
		this.size = "";
		this.fontSize = "";
		this.textLabel;
		this.url;
		this.altText;
		this.target;
	}

	render() {
		const isCustom = this.custom === "on";

		const isCustomColor = isCustom
			? `--btn-primary-color: ${this.firstColor}; --btn-secondary-color: ${this.secondaryColor};`
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

		return this.mode ===
			"outline" /* ---------------- IF OUTLINE ------------------ */
			? this.kind === "link"
				? html`
						<a
							style="${isCustomColor}${isCustomSize}${isCustomFontSize}"
							href="${this.url}"
							alt="${this.altText}"
							title="${this.altText}"
							target="${this.target}"
							class="btn ${isCustom ? "btn-outline-custom" : "btn-outline"}"
							>${this.textLabel}
						</a>
					`
				: html`
						<button
							style="${isCustomColor}${isCustomSize}${isCustomFontSize}"
							class="btn ${isCustom ? "btn-outline-custom" : "btn-outline"}"
							title="${this.textLabel}"
						>
							${this.textLabel}
						</button>
					`
			: this.mode === "ghost" /* ---------------- IF GHOST ------------------ */
				? this.kind === "link"
					? html`
							<a
								style="${isCustomColor}${isCustomSize}${isCustomFontSize}"
								href="${this.url}"
								alt="${this.altText}"
								title="${this.altText}"
								target="${this.target}"
								class="btn ${this.custom === "on"
									? "btn-ghost-custom"
									: "btn-ghost"}"
								>${this.textLabel}
							</a>
						`
					: html`
							<button
								style="${isCustomColor}${isCustomSize}${isCustomFontSize}"
								class="btn ${this.custom === "on"
									? "btn-ghost-custom"
									: "btn-ghost"}"
								title="${this.textLabel}"
							>
								${this.textLabel}
							</button>
						`
				: this.kind ===
					  "link" /* ---------------- IF DEFAULT (PRIMARY) ------------------ */
					? html`
							<a
								style="${isCustomColor}${isCustomSize}${isCustomFontSize}"
								href="${this.url}"
								alt="${this.altText}"
								title="${this.altText}"
								target="${this.target}"
								class="btn ${this.custom === "on"
									? "btn-custom"
									: "btn-primary"}"
								>${this.textLabel}
							</a>
						`
					: html`
							<button
								style="${isCustomColor}${isCustomSize}${isCustomFontSize}"
								class="btn ${this.custom === "on"
									? "btn-custom"
									: "btn-primary"}"
								title="${this.textLabel}"
							>
								${this.textLabel}
							</button>
						`;
	}
}
customElements.define(SemaButton.is, SemaButton);
