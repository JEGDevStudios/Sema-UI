# Sema Button (`<sema-breadcrumbs>`)

El componente `<sema-breadcrumbs>` es un elemento de interfaz versátil que permite renderizar todo un componente de seccion para mostrar una barra de navegación pensada principalmente para documentación para el usuario ya sea dentro de una web o una PWA con estilos consistentes, y soporte para dark mode nativo y autónomo.

## Instalación

Asegúrate de importar el componente en tu proyecto. Aquí tienes ejemplos para los frameworks más populares:

### React / Next.js

Importa la librería en tu archivo principal (`main.jsx`, `App.jsx`) o en el `layout.tsx`.

- Primer ejemplo pasando manualmente los valores para las propiedades:

```jsx
import "@jegdev/sema-ui";

export default function App() {
	return (
		<sema-breadcrumbs
			items='[
        { "label": "Inicio", "path": "/" },
        { "label": "Componentes", "path": "/components" },
        { "label": "Configuración" }
      ]'
		></sema-breadcrumbs>
	);
}
```

- Segundo ejemplo pasando los elementos de las preguntas mediante un array:

```jsx
import "@jegdev/sema-ui";

// Asignas el array de objetos
const myBreads = [
  { label: "Inicio", path: "/" },
  { label: "Componentes", path: "/components" },
  { label: "Configuración" }
];

export default function App() {
	return (
		<sema-breadcrumbs
			title="Preguntas Frecuentes"
			items={myBreads}
		></sema-breadcrumbs>
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
  <sema-breadcrumbs
    items='[
      { "label": "Inicio", "path": "/" },
      { "label": "Componentes", "path": "/components" },
      { "label": "Configuración" }
    ]'
  ></sema-breadcrumbs>
```

### Svelte

```typescript
import "@jegdev/sema-ui";
```

## Ejemplos de Uso

### 1. Cambiar color

Para que el componente de acordion cambie su color predeterminado define la propiedad color="". Puedes definir un color principal que se heredará en todos los acordiones internos.

```html
  <sema-breadcrumbs
    color="blue"
    items='[
      { "label": "Inicio", "path": "/" },
      { "label": "Componentes", "path": "/components" },
      { "label": "Configuración" }
    ]'
  ></sema-breadcrumbs>
```

La propiedad `color=""` puede recibir distintos formatos para colocar los colores, puedes usar los predetermiados como lo harias comunmente en css usando para palabras reservada "red", "blue", "green", etc. O puedes hacer uso de colores exadecimales como "#dc2626". "#fcfcfc", "#0c0c0c", etc. Tambien puedes hacer uso de rgb() de la misma forma.

#### Ejemplos:

- Con palabras reservadas

```html
<sema-breadcrumbs
	color="blue"
  items='[
    { "label": "Inicio", "path": "/" },
    { "label": "Componentes", "path": "/components" },
    { "label": "Configuración" }
  ]'
></sema-breadcrumbs>
```

- Con exadecimales

```html
<sema-breadcrumbs
	color="#0077ff"
  items='[
    { "label": "Inicio", "path": "/" },
    { "label": "Componentes", "path": "/components" },
    { "label": "Configuración" }
  ]'
></sema-breadcrumbs>
```

- Con rgb()

```html
<sema-breadcrumbs
	color="rgb(0, 85, 255)"
  items='[
    { "label": "Inicio", "path": "/" },
    { "label": "Componentes", "path": "/components" },
    { "label": "Configuración" }
  ]'
></sema-breadcrumbs>
```

---

## API Reference

| Propiedad | Tipo     | Default   | Descripción                                         |
| :-------- | :------- | :-------- | :-------------------------------------------------  |
| `color`   | `String` | `#dc2626` | Puedes usar `blue`, `#0077ff` y `rgb(0, 85, 255)` |
| `items`   | `Array`  | `[]`      | Array de objetos con la estructura                  |
|           |          |           | { label: string, path: string }                     |
