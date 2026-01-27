import { css } from "lit"

export const SemaAccordionStyles = css`
  :host {
    display: block;
    font-family: Arial, Helvetica, sans-serif;
  }

  .accordion {
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    background: var(--isOpenBackground);
    overflow: hidden;
  }

  .__btn {
    padding: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    background: var(--color-btn);
    backdrop-filter: blur(5px);
    transition: background 0.2s ease, color 0.2s ease;
    max-height: 200px; 
    gap: 1rem;
  }

  .__title {
    margin: 0;
    color: #000;
  }
  
  svg {
    width: 16px;
    height: 16px;
    fill: var(--svgcolor);
    transform: var(--isOpenRotate);
    transition: transform 0.3s;
  }

  .__dropdown {
    padding: var(--isOpenPadding);
    max-height: var(--isOpenHeight);
    overflow: hidden;
    transition: all 0.3s ease;
    opacity: var(--isOpenOpacity);
    border-top: var(--isOpenBorderTop);
  }

  .__text {
    color: #444547;
    margin: 0;
  }

	@media (prefers-color-scheme: dark) {
		.__title {
      color: #fff;
    }
      
    svg {
      fill: var(--svgcolor);
    }

    .__text {
      color: #dbdbdd;
    }

	}
`
