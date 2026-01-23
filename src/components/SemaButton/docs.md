# Sema Button (`<sema-button>`)

El componente `<sema-button>` es un elemento de interfaz versátil que permite renderizar botones de acción o enlaces de navegación con estilos consistentes, tamaños configurables y soporte para personalización de colores.

## Instalación

Asegúrate de importar el componente en tu proyecto. Aquí tienes ejemplos para los frameworks más populares:

### React / Next.js

Importa la librería en tu archivo principal (`main.jsx`, `App.jsx`) o en el `layout.tsx`.

```jsx
import "@jegdev/sema-ui";

export default function App() {
	return (
		<div>
			<sema-button textLabel="Click en React"></sema-button>
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
<sema-button textLabel="Hola Astro"></sema-button>
```

### Svelte

```typescript
import "@jegdev/sema-ui";
```

## Ejemplos de Uso

### 1. Botón Básico

Por defecto, el componente renderiza un botón con los estilos primarios de la marca (rojo).

```html
<sema-button textLabel="Click Aquí"></sema-button>
```

### 2. Enlace de Navegación

Para que el botón funcione como un hipervínculo (`<a>`), define la propiedad `kind="link"` y proporciona una `url`.

```html
<sema-button
	kind="link"
	url="https://google.com"
	target="_blank"
	textLabel="Ir a Google"
>
</sema-button>
```

### 3. Tamaños (Size)

Controla el ancho del botón mediante la propiedad `size`.

- **`sm`**: 80px
- **`md`**: 120px (Por defecto)
- **`lg`**: 160px
- **`full`**: 100% del contenedor padre

```html
<!-- Botón pequeño -->
<sema-button size="sm" textLabel="Small"></sema-button>

<!-- Botón ancho completo -->
<sema-button size="full" textLabel="Full Width"></sema-button>
```

### 4. Tamaño de Fuente (Font Size)

Puedes ajustar el tamaño del texto independientemente del tamaño del botón usando `fontSize`.

- **`sm`**: 0.8rem
- **`md`**: 1rem (Por defecto)
- **`lg`**: 1.5rem
- **`xl`**: 2rem

```html
<sema-button fontSize="xl" textLabel="Texto Grande"></sema-button>
```

### 5. Colores Personalizados

Para aplicar tus propios colores, añade el atributo `custom` (booleano) y define los colores de fondo y texto.

> **Nota:** Al hacer hover, los colores se invierten automáticamente para crear un efecto visual.

```html
<sema-button
	custom
	firstColor="#000000"
	secondaryColor="#FACC15"
	textLabel="Negro y Amarillo"
>
</sema-button>
```

---

## API Reference

| Propiedad        | Tipo      | Default     | Descripción                                                         |
| :--------------- | :-------- | :---------- | :------------------------------------------------------------------ |
| `textLabel`      | `String`  | `undefined` | **Requerido.** El texto que se mostrará dentro del botón.           |
| `kind`           | `String`  | `""`        | Si es `"link"`, renderiza un `<a>`. De lo contrario, un `<button>`. |
| `url`            | `String`  | `undefined` | URL de destino. Solo funciona si `kind="link"`.                     |
| `target`         | `String`  | `_self`     | Define dónde abrir el enlace (ej. `_blank`). Solo si `kind="link"`. |
| `size`           | `String`  | `"md"`      | Ancho del botón: `sm`, `md`, `lg`, `full`.                          |
| `fontSize`       | `String`  | `"md"`      | Tamaño del texto: `sm`, `md`, `lg`, `xl`.                           |
| `custom`         | `Boolean` | `false`     | Activa el modo de colores personalizados.                           |
| `firstColor`     | `String`  | `""`        | Color de fondo (Background) en modo personalizado.                  |
| `secondaryColor` | `String`  | `""`        | Color de texto en modo personalizado.                               |

## Accesibilidad

- El componente utiliza etiquetas semánticas nativas (`<button>` o `<a>`) según el caso.
- Soporta navegación por teclado (`Tab`) y foco visible (`outline`).
- El atributo `title` se establece automáticamente igual que `textLabel` para mejorar el contexto.
