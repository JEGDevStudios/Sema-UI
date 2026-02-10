import { css } from "lit"

export const stylesSemaFaqs = css`

  :host {
    display: block;
    font-family: "Inter", system-ui, -apple-system, sans-serif;
  }

  .faqs-section {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  article {
    max-width: 980px;
    width: 100%;
  }

  .__title {
    color: #000;
    text-align: center;
  }

  :host([theme="dark"]) .__title{ 
    color: #fff;
  }
`