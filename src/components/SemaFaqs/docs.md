# Sema Button (`<sema-faqs>`)

El componente `<sema-faqs>` es un elemento de interfaz y SEO versátil que permite renderizar todo un componente de seccion para mostrar prguntas frecuentes con acordiones para el usuario ya sea dentro de una web o una PWA con estilos consistentes, y soporte para dark mode nativo y autonomo.

## Instalación

Asegúrate de importar el componente en tu proyecto. Aquí tienes ejemplos para los frameworks más populares:

### React / Next.js

Importa la librería en tu archivo principal (`main.jsx`, `App.jsx`) o en el `layout.tsx`.

- Primer ejemplo pasando manualmente los valores para las propiedades:

```jsx
import "@jegdev/sema-ui";

export default function App() {
	return (
		<sema-faqs
			title="Preguntas Frecuentes"
			faqs='[
        {"question": "¿Cuál es el horario?", "answer": "De 9am a 6pm."},
        {"question": "¿Hacen envíos?", "answer": "Sí, a todo el país."}
      ]'
		></sema-faqs>
	);
}
```

- Segundo ejemplo pasando los elementos de las preguntas mediante un array:

```jsx
import "@jegdev/sema-ui";

// Asignas el array de objetos
const myFaqs = [
	{
		question: "¿Cómo puedo devolver un producto?",
		answer: "Tienes 30 días para realizar devoluciones presentando tu ticket.",
	},
	{
		question: "¿Aceptan tarjetas de crédito?",
		answer: "Sí, aceptamos Visa, Mastercard y AMEX.",
	},
	{
		question: "¿Dónde están ubicados?",
		answer: "Estamos en el centro de la ciudad, calle 5 av 10.",
	},
];

export default function App() {
	return (
		<sema-faqs
			title="Preguntas Frecuentes"
			faqs={myFaqs}
		></sema-faqs>
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
<sema-faqs
	title="Preguntas Frecuentes"
	faqs='[
    {"question": "Pregunta 1", "answer": "Respuesta 1"},
    {"question": "Pregunta 2", "answer": "Respuesta 2"}
  ]'
></sema-faqs>
```

### Svelte

```typescript
import "@jegdev/sema-ui";
```

## Ejemplos de Uso

### 1. Acordión básico

Por defecto, el componente renderiza una pregunta de tipo string para el usuario (question="pregunta") y una respuesta de tipo string para el usuario (answer="respuesta") con los estilos del icono de flecha rojo. +El componente renderiza una sección completa con título y lista de preguntas. Es necesario pasar el array de preguntas en formato JSON si se usa directamente en HTML.

```html
  <sema-faqs
    title="Centro de Ayuda"
    faqs='[
      {"question": "¿Cuál es el horario?", "answer": "9am - 6pm"},
      {"question": "¿Tienen garantía?", "answer": "Sí, 1 año."}
    ]'
  ></sema-faqs>
```

### 2. Cambiar color

Para que el componente de acordion cambie su color predeterminado define la propiedad color="". Puedes definir un color principal que se heredará en todos los acordiones internos.

```html
  <sema-faqs
    color="blue"
    title="Soporte Técnico" 
    faqs='[...]'
  ></sema-faqs>
```

La propiedad `color=""` puede recibir distintos formatos para colocar los colores, puedes usar los predetermiados como lo harias comunmente en css usando para palabras reservada "red", "blue", "green", etc. O puedes hacer uso de colores exadecimales como "#dc2626". "#fcfcfc", "#0c0c0c", etc. Tambien puedes hacer uso de rgb() de la misma forma.

#### Ejemplos:

- Con palabras reservadas

```html
  <sema-faqs
    color="blue"
    title="Soporte Técnico" 
    faqs='[...]'
  ></sema-faqs>
```

- Con exadecimales

```html
  <sema-faqs
    color="#0077ff"
    title="Soporte Técnico" 
    faqs='[...]'
  ></sema-faqs>
```

- Con rgb()

```html
  <sema-faqs
    color="rgb(0, 85, 255)"
    title="Soporte Técnico" 
    faqs='[...]'
  ></sema-faqs>
```

---

## API Reference

| Propiedad  | Tipo     | Default   | Descripción                                         |
| :--------- | :------- | :-------- | :-------------------------------------------------- |
| `color`    | `String` | `#dc2626` | Puedes usar `blue`, `#0077ff` y `rgb(0, 85, 255)` |
| `title`    | `String` | `""`      | Título principal de la sección (H2).                |
| `faqs`     | `Array`  | `[]`      | Array de objetos con la estructura                  |
|            |          |           | { question: string, answer: string }                |
