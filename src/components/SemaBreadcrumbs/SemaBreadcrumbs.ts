import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { BreadcrumbsStyles } from "./sema-breadcrumbs.css"

@customElement('sema-breadcrumbs')
export class SemaBreadcrumbs extends LitElement {

  static styles = [BreadcrumbsStyles]

  @property({ type: String, reflect: true }) theme: string = "light";
  @property({ type: Array }) items: any[] = [];
  @property({ type: String }) color: string = '';

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
    const styles = this.color ? `--color-primary: ${this.color};` : `--color-primary: #da2b48;`;

    return html`
      <nav aria-label="breadcrumb" style="${styles}">
        <ol>
          ${this.items.map((item, index) => html`
            <li class="${index === this.items.length - 1 ? '__active' : '__link'}">
              ${item.path && index !== this.items.length - 1 ? html`<a href="${item.path}">${item.label}</a>` : item.label}
            </li>
            ${index < this.items.length - 1 ? html`<li class="__slash">/</li>` : ''}
          `)}
        </ol>
      </nav>
    `
  }
};

declare global {
  interface HTMLElementTagNameMap {
    'sema-breadcrumbs': SemaBreadcrumbs;
  }

  namespace JSX {
    interface IntrinsicElements {
      'sema-breadcrumbs': {
        color?: '' | string;
        items?: any[];
      };
    }
  }
}