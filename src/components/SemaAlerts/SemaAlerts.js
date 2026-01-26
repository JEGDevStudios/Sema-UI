import { LitElement, html } from "lit";
import { SemaAlertsStyles } from "./sema-alerts.css.js";

export class SemaAlerts extends LitElement {
	static get is() {
		return "sema-alerts";
	}

	static styles = [SemaAlertsStyles];

	static properties = {
		title: { type: String },
		message: { type: String },
		type: { type: String },
	};

	constructor() {
		super();
		this.title = "";
		this.message = "";
		this.type = "info";
	}

	render() {
		return html`
			<section class="__section __${this.type}">
				<h3 class="__title">${this.title}</h3>
				<p class="__paragraph">${this.message}</p>
			</section>
		`;
	}
}
customElements.define(SemaAlerts.is, SemaAlerts);
