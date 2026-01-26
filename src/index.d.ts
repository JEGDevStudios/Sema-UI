import { LitElement } from 'lit';

export class SemaButton extends LitElement {
  mode: 'outline' | 'ghost' | '' | string;
  kind: 'link' | 'button' | string;
  custom: 'on' | 'off' | string;
  firstColor: string;
  secondaryColor: string;
  size: 'sm' | 'md' | 'lg' | 'full' | string;
  fontSize: 'sm' | 'md' | 'lg' | 'xl' | string;
  url: string;
  target: '_blank' | '_self' | '_parent' | '_top' | string;
  altText: string;
}

export class SemaAlerts extends LitElement {
  type: '' | 'info' | 'warn' | 'error' | string;
  title: string;
  message: string;
}

declare global {
  interface HTMLElementTagNameMap {
    "sema-button": SemaButton;
  }
  
  interface HTMLElementTagNameMap {
    "sema-alerts": SemaAlerts;
  }

  namespace JSX {
    interface IntrinsicElements {
      "sema-button": {
        mode?: 'outline' | 'ghost' | '' | string;
        kind?: 'link' | 'button' | string;
        custom?: 'on' | 'off' | string;
        
        // Colores
        firstColor?: string;
        "first-color"?: string;
        
        secondaryColor?: string;
        "secondary-color"?: string;
        
        // Tamaños
        size?: 'sm' | 'md' | 'lg' | 'full' | string;
        
        fontSize?: 'sm' | 'md' | 'lg' | 'xl' | string;
        "font-size"?: string;
        
        url?: string;
        target?: string;
        
        altText?: string;
        "alt-text"?: string;

        children?: any;
        className?: string;       
        style?: any;              
        key?: any;                
        ref?: any;                
        onClick?: (e: any) => void; 
        [key: string]: any;
      };

      "sema-alerts": {
        type?: '' | 'info' | 'warn' | 'error' | string;
        title?: string;
        message?: string;
        [key: string]: any;
      }
    }
  }
}