import { css } from "lit"

export const stylesSemaFaqs = css`

  .__title {
    color: #000;
    text-align: center;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      display: block;
      font-family: Arial, Helvetica, sans-serif;
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    article {
      max-width: 980px;
    }
    .__title{ 
      color: #fff;
    }
  }
`