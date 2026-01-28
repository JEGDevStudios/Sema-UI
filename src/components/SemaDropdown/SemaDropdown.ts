import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { SemaDropdownStyles } from "./sema-dropdown.css";

interface DropdownItem {
  label: string;
  path?: string;
}

interface DropdownCategory {
  category: string;
  items: DropdownItem[];
}

@customElement('sema-dropdown')
export class SemaDropdown extends LitElement {

  static styles = [SemaDropdownStyles]

  @property({ type: String }) label: string = '';
  @property({ type: String }) color: string = '';
  @property({ type: String }) bgColor: string = '';
  @property({ type: Boolean }) open: boolean = false;
  @property({ type: Array }) items: (DropdownItem | DropdownCategory)[] = [];

  render() {
    const isOpen = this.open === true;

    let svgColor =  this.color ? this.color : '#dc2626';
    let bgColor =  this.bgColor ? this.bgColor : '#dc2626';

    const stylesBtn = isOpen ? `
      --isOpenBgColor: ${bgColor};
      --isOpenPadding: 1rem;
      --isOpenHeight: auto;
      --isOpenOpacity: 1;
      --isOpenRotate: rotate(180deg);`
      :`
      --isOpenPadding: 0; 
      --isOpenHeight: 0; 
      --isOpenOpacity: 0;
      --isOpenRotate: rotate(0);`;

    const stylesSvg = `--svgcolor: ${svgColor};`
    
    const styles = stylesBtn + stylesSvg

    return html`
        <button class="__btn" @click="${this._changeIsOpen}" style="${stylesSvg}">
          <span class="__label">${this.label}</span>

          <div class="__icon">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z" opacity="1" data-original="#000000" class=""></path></g></svg>
          </div>
        </button>

        <div class="__content" style="${styles}">
          ${this.items.map(item => {
            if ('category' in item) {
              return html`
                <div class="__category">
                  <span class="__category-title">${item.category}</span>
                  ${item.items.map(subItem => html`
                    <a href="${subItem.path || '#'}" title="${subItem.label}" aria-label="${subItem.label}" class="__link">${subItem.label}</a>
                  `)}
                </div>
              `;
            }
            return html`<a href="${item.path || '#'}" title="${item.label}" aria-label="${item.label}" class="__link">${item.label}</a>`;
          })}
        </div>
      </div>
    `
  }

  _changeIsOpen() {
    this.open = !this.open;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sema-dropdown': SemaDropdown;
  }

  namespace JSX {
    interface IntrinsicElements {
      'sema-dropdpwn': {
        label?: string;
        color?: string;
        bgColor?: string;
        items?: any[];
      }
    }
  }
}