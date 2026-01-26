import { LitElement, html } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { SemaAlertsStyles } from "./sema-alerts.css";

@customElement('sema-alerts')
export class SemaAlerts extends LitElement {

	static styles = [SemaAlertsStyles];

	 @property({ type: String })	type: 'info' | 'warn' | 'error' | string = 'info';
	 @property({ type: String })	title: string = '';
	 @property({ type: String })	message: string = '';

	render() {
		return html`
			<section class="__section __${this.type}">
				<h3 class="__title">${this.title}</h3>
				<p class="__paragraph">${this.message}</p>
			</section>
		`;
	}

}

declare global {
	interface HTMLElementTagNameMap {
		"sema-alerts": SemaAlerts;
	}

	namespace JSX {
		interface IntrinsicElements {
			"sema-alerts": {
				type?: '' | 'info' | 'warn' | 'error' | string;
				title?: string;
				message?: string;
				[key: string]: any;
			}
		}
	}
}