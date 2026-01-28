# Sema Button (`<sema-accordion>`)

El componente `<sema-accordion>` es un elemento de interfaz versátil que permite renderizar acordiones para el usuario ya sea dentro de una web o una PWA con estilos consistentes, y soporte para dark mode nativo y autónomo.

## Instalación

Asegúrate de importar el componente en tu proyecto. Aquí tienes ejemplos para los frameworks más populares:

### React / Next.js

Importa la librería en tu archivo principal (`main.jsx`, `App.jsx`) o en el `layout.tsx`.

```jsx
import "@jegdev/sema-ui";

export default function App() {
	return (
		<div>
			<sema-accordion question="hola" answer="adios"></sema-accordion>
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
  <sema-
    question="hola"
    answer="adios"
  ></sema-accordion>
```

### Svelte

```typescript
import "@jegdev/sema-ui";
```

## Ejemplos de Uso

### 1. Acordión básico

Por defecto, el componente renderiza una pregunta de tipo string para el usuario (question="pregunta") y una respuesta de tipo string para el usuario (answer="respuesta") con los estilos del icono de flecha rojo.

```html
  <sema-
    question="pregunta"
    answer="respuesta"
  ></sema-accordion>
```

### 2. Cambiar color

Para que el componente de acordion cambie su color predeterminado define la propiedad `color=""`.

```html
<sema-accordion
	color="blue"
	question="pregunta"
	answer="respuesta"
></sema-accordion>
```

La propiedad `color=""` puede recibir distintos formatos para colocar los colores, puedes usar los predetermiados como lo harias comunmente en css usando para palabras reservada "red", "blue", "green", etc. O puedes hacer uso de colores exadecimales como "#dc2626". "#fcfcfc", "#0c0c0c", etc. Tambien puedes hacer uso de rgb() de la misma forma.

#### Ejemplos:

- Con palabras reservadas

```html
<sema-accordion
	color="blue"
	question="pregunta"
	answer="respuesta"
></sema-accordion>
```

- Con exadecimales

```html
<sema-accordion
	color="#0077ff"
	question="pregunta"
	answer="respuesta"
></sema-accordion>
```

- Con rgb()

```html
<sema-accordion
	color="rgb(0, 85, 255)"
	question="pregunta"
	answer="respuesta"
></sema-accordion>
```

---

## API Reference

| Propiedad  | Tipo     | Default   | Descripción                                       |
| :--------- | :------- | :-------- | :------------------------------------------------ |
| `color`    | `String` | `#dc2626` | Puedes usar `blue`, `#0077ff` y `rgb(0, 85, 255)` |
| `question` | `String` | `""`      | Puedes pasarle aqui el titulo de la pregunta.     |
| `answer`   | `String` | `""`      | Pueder pasarle aqui la respuesta de la pregunta.  |
