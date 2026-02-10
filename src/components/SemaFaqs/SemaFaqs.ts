import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { SemaAccordion } from "../SemaAccordion/SemaAccordion";
import { stylesSemaFaqs } from "./sema-faqs.css";

@customElement('sema-faqs')
export class SemaFaqs extends LitElement{
  
  static styles = [stylesSemaFaqs]

  @property({ type: String, reflect: true }) theme: string = "light";
  @property({type: String}) title: string = '';
  @property({type: String}) color: string = '';
  @property({type: Array}) faqs: any[] = [];

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

  render(){
    // Construimos el objeto JSON de forma segura
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": this.faqs.map((faq: any) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        }
      }))
    };

    // Serializamos y escapamos etiquetas de cierre para evitar XSS y errores de sintaxis
    const jsonLd = JSON.stringify(schemaData).replace(/<\/script>/g, '<\\/script>');

    return html`
      <section class="faqs-section">
        <h2 class="__title">${this.title}</h2>
        <article>
          ${this.faqs.map((faq: any) => html`
              <sema-accordion
                color="${this.color}"
                question="${faq.question}"
                answer="${faq.answer}"
              ></sema-accordion>
            `
          )}
        </article>
      </section>
      <script type="application/ld+json">
        ${unsafeHTML(jsonLd)}
      </script>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sema-faqs': SemaFaqs;
  }

  namespace JSX {
    interface IntrinsicElements {
      'sema-faqs': {
        title?: string;
        color?: '' | string;
        faqs?: any[];
      };
    }
  }
}