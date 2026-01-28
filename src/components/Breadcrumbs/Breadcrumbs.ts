import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { BreadcrumbsStyles } from "./breadcrumbs.css"

@customElement('sema-breadcrumbs')
export class SemaBreadcrumbs extends LitElement {

  static styles = [BreadcrumbsStyles]

  @property({ type: Array }) items: any[] = [];
  @property({ type: String }) color: string = '';

  render() {
    const styles = this.color ? `--color-primary: ${this.color};` : `--color-primary: #dc2626;`;

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