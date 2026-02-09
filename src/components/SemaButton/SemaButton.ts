import { LitElement, html } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { SemaButtonStyles } from "./sema-button.css";

@customElement('sema-button')
export class SemaButton extends LitElement {

	static styles = [SemaButtonStyles];

// 2. Definimos propiedades con Tipos Reales
  @property({ type: String }) mode: 'outline' | 'ghost' | 'menu' | 'nav-link' | '' = '';
  @property({ type: String }) kind: 'link' | 'button' = 'button';
  @property({ type: String }) custom: 'on' | 'off' = 'off';
  
  // Colores (pueden ser undefined si no se pasan)
  @property({ type: String }) firstColor?: string;
  @property({ type: String }) secondaryColor?: string;

  @property({ type: String }) size: 'sm' | 'md' | 'lg' | 'full' = 'md';
  @property({ type: String }) fontSize: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @property({ type: String }) rounded: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'circle' = 'md';

  @property({ type: String, reflect: true }) theme: string = "light";

  @property({ type: String }) url: string = '';
  @property({ type: String }) target: '_blank' | '_self' = '_self';
  @property({ type: String }) altText: string = '';

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
		const isCustom = this.custom === "on";

		const isCustomColor = isCustom
			? `--btn-primary-color: ${this.firstColor}; --btn-secondary-color: ${this.secondaryColor};`
			: "";

		let sizeValue = "120px";
		if (this.rounded === "circle") {
			if (this.size === "sm") sizeValue = "35px";
			else if (this.size === "md") sizeValue = "45px";
			else if (this.size === "lg") sizeValue = "55px";
			else if (this.size === "full") sizeValue = "100%";
			else sizeValue = "45px";
		} else {
			if (this.size === "sm") sizeValue = "80px";
			else if (this.size === "md") sizeValue = "120px";
			else if (this.size === "lg") sizeValue = "160px";
			else if (this.size === "full") sizeValue = "100%";
		}

		const isCustomSize = `--btn-width: ${sizeValue};`;

		let fontValue = "1rem";
		if (this.fontSize === "sm") fontValue = "0.8rem";
		else if (this.fontSize === "md") fontValue = "1rem";
		else if (this.fontSize === "lg") fontValue = "1.5rem";
		else if (this.fontSize === "xl") fontValue = "2rem";

		const isCustomFontSize = `--btn-font-size: ${fontValue}`;

		// Determinación de clases basada en el modo
		let modeClass = isCustom ? "btn-custom" : "btn-primary";
		if (this.mode === "outline") modeClass = isCustom ? "btn-outline-custom" : "btn-outline";
		else if (this.mode === "ghost") modeClass = isCustom ? "btn-ghost-custom" : "btn-ghost";
		else if (this.mode === "menu") modeClass = isCustom ? "btn-menu-custom" : "btn-menu";
		else if (this.mode === "nav-link") modeClass = isCustom ? "btn-nav-link-custom" : "btn-nav-link";

		const roundedClass = `rounded-${this.rounded}`;
		const finalClass = `btn ${modeClass} ${roundedClass}`;
		const finalStyle = `${isCustomColor}${isCustomSize}${isCustomFontSize}`;

		return this.kind === "link"
			? html`
				<a
					style="${finalStyle}"
					href="${this.url}"
					alt="${this.altText}"
					title="${this.altText}"
					target="${this.target}"
					class="${finalClass}"
				>
					<slot></slot>
				</a>`
			: html`
				<button style="${finalStyle}" class="${finalClass}" title="${this.altText}">
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
        mode?: 'outline' | 'ghost' | 'menu' | 'nav-link' | '' | string;
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
        rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'circle' | string;
        theme?: 'light' | 'dark' | string;
        
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