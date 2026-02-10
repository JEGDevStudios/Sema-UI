import { css } from "lit";

export const cardStyles = css`
	.product-card {
		background-color: white;
		width: 300px;
		border-radius: 12px;
		overflow: hidden; /* Para que la imagen respete los bordes redondeados */
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		cursor: pointer;
		box-sizing: border-box;
	}

	/* Efecto al pasar el mouse por encima */
	.product-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
	}

	/* 1. Imagen */
	.card-image-container {
		width: 100%;
		height: 200px;
		overflow: hidden;
		position: relative;
	}

	.card-image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Mantiene la proporción de la imagen sin estirarla */
		transition: transform 0.5s ease;
	}

	.product-card:hover .card-image-container img {
		transform: scale(1.05); /* Zoom suave en la imagen */
	}

	/* Contenedor de la información */
	.card-details {
		padding: 20px;
	}

	/* 2. Categoría e ID (Cabecera pequeña) */
	.card-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
		font-size: 0.75rem;
	}

	.category {
		background-color: #e0e7ff;
		color: #4338ca;
		padding: 4px 8px;
		border-radius: 4px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.product-id {
		color: #888;
	}

	/* 3. Título del Producto */
	.product-title {
		margin: 0 0 10px 0;
		font-size: 1.2rem;
		color: #333;
		line-height: 1.4;
		font-weight: 600;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* 4. Valoración (Estrellas y Promedio) */
	.rating-container {
		display: flex;
		align-items: center;
		margin-bottom: 15px;
		font-size: 0.9rem;
	}

	.stars {
		color: #fbbf24; /* Color dorado */
		margin-right: 5px;
		letter-spacing: 1px;
	}

	.average-rating {
		font-weight: bold;
		color: #333;
		margin-right: 5px;
	}

	.review-count {
		color: #6b7280;
		font-size: 0.8rem;
	}

	/* Línea separadora */
	hr {
		border: 0;
		border-top: 1px solid #eee;
		margin: 10px 0;
	}

	/* 5. Precio */
	.price-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 15px;
	}

	.price {
		font-size: 1.5rem;
		font-weight: 800;
		color: #1f2937;
	}

	.currency {
		font-size: 0.9rem;
		vertical-align: top;
	}
	
	:host([theme="dark"]) .product-card {
		background-color: #1f2937;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
	}

	:host([theme="dark"]) .product-title {
		color: #f9fafb;
	}

	:host([theme="dark"]) .average-rating {
		color: #f3f4f6;
	}

	:host([theme="dark"]) .review-count {
		color: #9ca3af;
	}

	:host([theme="dark"]) .price {
		color: #f9fafb;
	}

	:host([theme="dark"]) .category {
		background-color: #3730a3;
		color: #e0e7ff;
	}

	:host([theme="dark"]) hr {
		border-top: 1px solid #374151;
	}
`;
