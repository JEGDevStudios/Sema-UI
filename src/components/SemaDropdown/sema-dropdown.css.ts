import { css } from "lit"

export const SemaDropdownStyles = css`
  :host {
    display: block;
    font-family: "Inter", system-ui, -apple-system, sans-serif;
  }
  .__btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    backdrop-filter: blur(5px);
    transition: background 0.2s ease, color 0.2s ease;
    max-height: 200px;
    min-width: 100px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    padding: 1rem;
    gap: 1rem;
		box-sizing: border-box;
  }

  .__label {
    margin: 0;
    color: #fff;
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    fill: var(--svgcolor);
    transform: var(--isOpenRotate);
    transition: transform 0.3s;
  }

  .__content {
    display: flex;
    padding: var(--isOpenPadding);
    max-height: var(--isOpenHeight);
    overflow: hidden;
    transition: all 0.3s ease;
    opacity: var(--isOpenOpacity);
    background: #f1f1f1;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    flex-direction: column;
    max-width: 150px;
    border-radius: 4px;
  }

  .__category {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }

  .__category-title {
    font-size: 0.7rem;
    font-weight: bold;
    color: var(--svgcolor);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
  }

  .__link {
    color: #444547;
    text-decoration: none;
    padding: 0.5rem;
    padding-left: 1rem;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  .__link:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

	:host([theme="dark"]) .__label {
    color: #fff;
  }
    
  :host([theme="dark"]) svg {
    fill: var(--svgcolor);
  }

  :host([theme="dark"]) .__content {
    background: #131313;
  }

  :host([theme="dark"]) .__link {
    color: #dbdbdd;
  }

  :host([theme="dark"]) .__link:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  :host([theme="dark"]) .__category-title {
    color: var(--svgcolor);
  }

`