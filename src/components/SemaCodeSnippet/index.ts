import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("sema-code-snippet")
export class SemaCodeSnippet extends LitElement {
  @property({ type: String, reflect: true }) theme: string = "light";

	static styles = css`
		:host {
			display: block;
			position: relative;
			margin-bottom: 1.5rem;
      --snippet-bg: #ffffff;
      --snippet-text: #da2b48;
    }

    :host([theme="dark"]) {
      --snippet-bg: #16181d;
      --snippet-text: #fff;
    }

		pre {
      background: var(--snippet-bg);
      color: var(--snippet-text);
			padding: 1.5rem;
			border-radius: 8px;
			overflow-x: auto;
			font-family: "Menlo", "Monaco", "Courier New", monospace;
			font-size: 0.9rem;
			margin: 0;
			line-height: 1.5;
      box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
		}
		code {
			font-family: inherit;
			background: transparent;
			padding: 0;
		}
		.copy-btn {
			position: absolute;
			top: 0.75rem;
			right: 0.75rem;
			background: rgba(255, 255, 255, 0.1);
			border: 1px solid var(--snippet-text);
			color: var(--snippet-text);
			border-radius: 4px;
			padding: 4px 8px;
			font-size: 0.75rem;
			font-family: "Inter", sans-serif;
			cursor: pointer;
			transition: all 0.2s;
			opacity: 0;
		}
		:host(:hover) .copy-btn {
			opacity: 1;
		}
		.copy-btn:hover {
			background: rgba(255, 255, 255, 0.2);
		}
	`;

	copyToClipboard() {
		const code = this.textContent || "";
		navigator.clipboard.writeText(code.trim()).then(() => {
			const btn = this.shadowRoot?.querySelector(".copy-btn") as HTMLElement;
			if (!btn) return;

			const originalText = btn.innerText;
			btn.innerText = "Copied!";
			setTimeout(() => (btn.innerText = originalText), 2000);
		});
	}
  
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
		return html`
			<pre><code><slot></slot></code></pre>
			<button class="copy-btn" @click="${this.copyToClipboard}">Copy</button>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"sema-code-snippet": SemaCodeSnippet;
	}

	namespace JSX {
		interface IntrinsicElements {
			"sema-code-snippet": {
				theme?: "light" | "dark" | string;

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
