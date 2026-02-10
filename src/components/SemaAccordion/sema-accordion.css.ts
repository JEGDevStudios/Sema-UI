import { css } from "lit"

export const SemaAccordionStyles = css`
  :host {
    display: block;
    font-family: "Inter", system-ui, -apple-system, sans-serif;
  }

  .accordion {
    border-radius: 4px;
    margin-bottom: 0.5rem;
    background: var(--isOpenBackground);
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		box-sizing: border-box;
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
    width: 1rem;
    height: 1rem;
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
  }

  .__text {
    color: #444547;
    margin: 0;
  }

	:host([theme="dark"]) .__btn {
    background: var(--svgcolor);
  }

  :host([theme="dark"]) .__title {
    color: #fff;
  }
    
  :host([theme="dark"]) svg {
    fill: #fff;
  }

  :host([theme="dark"]) .__text {
    color: #dbdbdd;
  }
`
