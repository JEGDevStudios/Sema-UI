import { css } from "lit"

export const BreadcrumbsStyles = css`
  :host {
    display: block;
    font-family: Arial, Helvetica, sans-serif;
  }

  ol {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0.9rem;
  }

  .__link a {
    color: #000;
    cursor: pointer;
    font-weight: 500;
  }

  .__slash {
    margin: 0 8px;
    color: #9ca3af;
  }

  .__active, .__link, a {
    color: var(--color-primary);
    cursor: default;
    font-weight: 600;
  }

  @media (prefers-color-scheme: dark) {
    .__link a {
      color: #fff;
    }
  }
`