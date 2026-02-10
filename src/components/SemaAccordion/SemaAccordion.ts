import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { SemaAccordionStyles } from "./sema-accordion.css";

@customElement('sema-accordion')
export class SemaAccordion extends LitElement {

  static styles = [SemaAccordionStyles]

  @property({ type: String, reflect: true }) theme: string = "light";
  @property({type: String}) question: string = '';
  @property({type: String}) answer: string = '';
  @property({type: String}) color: string = '';
  @property({type: Boolean}) open: boolean = false;

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
    this._handleThemeUpdate();
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
    const isOpen = this.open;

    // Definir colores base
    let svgColor =  this.color ? this.color : '#da2b48';
    let btnColor = isOpen ? 'rgba(229, 231, 235, 0.2)' : '';

    const stylesBtn = isOpen ? `
    --color-btn: ${btnColor};
    --isOpenPadding: 1rem;
    --isOpenHeight: 200px;
    --isOpenOpacity: 1;
    --isOpenRotate: rotate(180deg);`
    :`
    --color-btn: transparent;
    --isOpenPadding: 0; 
    --isOpenHeight: 0; 
    --isOpenOpacity: 0;
    --isOpenRotate: rotate(0);`;

    const stylesSvg = `
    --svgcolor: ${svgColor};`
    
    const styles = stylesBtn + stylesSvg

    return html`
    <article class="accordion" style="${styles}" >
      <div class="__btn" @click="${this._changeIsOpen}">
        <h3 class="__title">${this.question}</h3>

        <div class="__icon">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z" opacity="1" data-original="#000000" class=""></path></g></svg>
        </div>
      </div>
      <div class="__dropdown">
        <p class="__text">${this.answer}</p>
      </div>
    </article>
    `
  }

  _changeIsOpen() {
    this.open = !this.open;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sema-accordion": SemaAccordion;
  }

  namespace JSX {
    interface IntrinsicElements {
      "sema-accordion": {
        question?: string;
        answer?: string;
        color?: string;
        open?: boolean;
        [key: string]: any; 
      }
    }
  }
}