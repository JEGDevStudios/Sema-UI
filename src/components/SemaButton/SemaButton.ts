import { LitElement, html } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { SemaButtonStyles } from "./sema-button.css";

@customElement('sema-button')
export class SemaButton extends LitElement {

	static styles = [SemaButtonStyles];

// 2. Definimos propiedades con Tipos Reales
  @property({ type: String }) mode: 'outline' | 'ghost' | '' = '';
  @property({ type: String }) kind: 'link' | 'button' = 'button';
  @property({ type: String }) custom: 'on' | 'off' = 'off';
  
  // Colores (pueden ser undefined si no se pasan)
  @property({ type: String }) firstColor?: string;
  @property({ type: String }) secondaryColor?: string;

  @property({ type: String }) size: 'sm' | 'md' | 'lg' | 'full' = 'md';
  @property({ type: String }) fontSize: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  @property({ type: String }) url: string = '';
  @property({ type: String }) target: '_blank' | '_self' = '_self';
  @property({ type: String }) altText: string = '';

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
							>
							<slot></slot>
						</a>
					`
				: html`
						<button
							style="${isCustomColor}${isCustomSize}${isCustomFontSize}"
							class="btn ${isCustom ? "btn-outline-custom" : "btn-outline"}"
							title="${this.altText}"
						>
							<slot></slot>
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
								>
								<slot></slot>
							</a>
						`
					: html`
							<button
								style="${isCustomColor}${isCustomSize}${isCustomFontSize}"
								class="btn ${this.custom === "on"
									? "btn-ghost-custom"
									: "btn-ghost"}"
								title="${this.altText}"
							>
								<slot></slot>
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
								>
								<slot></slot>
							</a>
						`
					: html`
							<button
								style="${isCustomColor}${isCustomSize}${isCustomFontSize}"
								class="btn ${this.custom === "on"
									? "btn-custom"
									: "btn-primary"}"
								title="${this.altText}"
							>
								<slot></slot>
							</button>
						`;
	}

}

declare global {
  interface HTMLElementTagNameMap {
    'sema-button': SemaButton;
  }

  namespace JSX {
    interface IntrinsicElements {
      'sema-button': {
        // Props específicas
        mode?: 'outline' | 'ghost' | '' | string;
        kind?: 'link' | 'button' | string;
        custom?: 'on' | 'off' | string;
        
        // Lit convierte camelCase a kebab-case automáticamente, 
        // pero aquí definimos lo que React puede usar.
        firstColor?: string;
        'first-color'?: string;
        
        secondaryColor?: string;
        'secondary-color'?: string;
        
        size?: 'sm' | 'md' | 'lg' | 'full' | string;
        fontSize?: 'sm' | 'md' | 'lg' | 'xl' | string;
        
        url?: string;
        target?: string;
        altText?: string;

        // Estándar React
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