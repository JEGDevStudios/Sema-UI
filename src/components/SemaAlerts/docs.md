# Sema Button (`<sema-alerts>`)

El componente `<sema-alerts>` es un elemento de interfaz versátil que permite renderizar menssages para el usuario ya sea dentro deuna web o una PWA con estilos consistentes, y soporte para dark mode ntivo y autonomo.

## Instalación

Asegúrate de importar el componente en tu proyecto. Aquí tienes ejemplos para los frameworks más populares:

### React / Next.js

Importa la librería en tu archivo principal (`main.jsx`, `App.jsx`) o en el `layout.tsx`.

```jsx
import "@jegdev/sema-ui";

export default function App() {
	return (
		<div>
			<sema-alerts
				title="Información"
				message="Este es un mensaje informativo."
			></sema-alerts>
		</div>
	);
}
```

Nota para Next.js: Si usas App Router, importa el componente en un Client Component o en el layout.tsx (usando 'use client' si es necesario).

### En Vue, configura Vite (o tu bundler) para tratar las etiquetas sema- como elementos personalizados y evitar advertencias de compilación.

```javascript
// vite.config.js export default defineConfig({

plugins: [
	vue({
		template: {
			compilerOptions: {
				isCustomElement: (tag) => tag.startsWith("sema-"),
			},
		},
	}),
];
```

Uso en componente:

```javascript
import "@jegdev/sema-ui";
```

### Angular Agrega CUSTOM_ELEMENTS_SCHEMA en tu módulo para permitir el uso de Web Components.

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import "@jegdev/sema-ui";

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

### Astro

```typescript
import "@jegdev/sema-ui";
```

```html
<sema-alerts 
  title="Información" 
  message="Este es un mensaje informativo.">
</sema-alerts>
```

### Svelte

```typescript
import "@jegdev/sema-ui";
```

## Ejemplos de Uso

### 1. Mensaje básico

Por defecto, el componente renderiza un mensaje de tipo informativo para el usuario (type="info") con los estilos en verde.

```html
<sema-alerts 
  title="Información" 
  message="Este es un mensaje informativo.">
</sema-alerts>
```

### 2. Type Warn

Para que el componente de mensaje infromativo funcione como uno de tipo alerta (type="warn"), define la propiedad `type="warn"`.

```html
<sema-alerts 
  type="warn"
  title="Alerta" 
  message="Este es un mensaje de advertencia.">
</sema-alerts>
```

### 3. Type Error

Para que el componente de mensaje funcione como uno de tipo error (type="error"), define la propiedad `type="error"`.

```html
<sema-alerts 
  type="error"
  title="Error" 
  message="Este es un mensaje de error"
></sema-alerts>
```

---

## API Reference

| Propiedad        | Tipo     | Default     | Descripción                                                             |
| :--------------- | :------- | :---------- | :---------------------------------------------------------------------- |
| `type`           | `String` | `info`      | Puedes alternar entre `warn` y `error`                                  |
| `title`          | `String` | `""`        | Puedes pasarle aqui el titulo del mensaje.                              |
| `message`        | `String` | `""`        | Pueder pasarle aqui el texto (párrafo) del mensaje.                     |

