import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
@customElement("sema-card-image")
export class SemaCardImage extends LitElement {

  static styles = css`
    :host {
      display: block;
			--card-title: #da2b48;
      --card-text: #1f2937;
			--card-bg: #fcfcfc;
    }

		:host([theme="dark"]) {
			--card-title: #da2b48;
      --card-text: #fff;
			--card-bg: #1f2937;
		}

    .card {
      display: flex;
      flex-direction: column;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      background: var(--card-bg);
    }

    .__image {
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    .__content {
      padding: 1rem;
    }

    .__title {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0 0 0.5rem 0;
      color: var(--card-title);
    }

    .__description {
      font-size: 1rem;
      color: #555;
      margin: 0 0 1rem 0;
      color: var(--card-text);
    }
    
    .__actions {
      display: flex;
      gap: 0.5rem;
    }
  `

  render() {
    return html`
      <div class="card">
        <slot name="image" class="__image"></slot>
        <div class="__content">
          <slot name="title" class="__title"></slot>
          <slot name="description" class="__description"></slot>
          <slot name="actions" class="__actions"></slot>
        </div>
      </div>
    `;
  }
}
