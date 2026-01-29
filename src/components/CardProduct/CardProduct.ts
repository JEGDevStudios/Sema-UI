import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cardStyles } from "./card-product.css";

@customElement("card-product")
export class CardProduct extends LitElement {

	static styles = [cardStyles];

  @property({type: String})  image: string = '';
  @property({type: String})  category: string = '';
  @property({type: String})  id: string = '';
  @property({type: String})  title: string = '';
  @property({type: Number})  rate: number = 0;
  @property({type: Number})  count: number = 0;
  @property({type: Number})  price: number = 0;

	render() {
		const filledStars = Math.min(5, Math.max(0, Math.round(this.rate)));
		const emptyStars = 5 - filledStars;

		return html`
			<article class="product-card" id="${this.id}">
				<div class="card-image-container">
					<img
						src="${this.image}"
						alt="Auriculares Premium"
					/>
				</div>

				<div class="card-details">
					<div class="card-meta">
						<span class="category">${this.category}</span>
						<span class="product-id">${this.id ? `ID: ${this.id}` : `` }</span>
					</div>

					<h3 class="product-title">${this.title}</h3>

					<div class="rating-container">
						<span class="stars">${"★".repeat(filledStars)}${"☆".repeat(emptyStars)}</span>
						<span class="average-rating">${this.rate}</span>
						<span class="review-count">(${this.count} valoraciones)</span>
					</div>

					<hr />

					<div class="price-container">
						<span class="price"><span class="currency">$</span>${this.price}</span>
					</div>
				</div>
			</article>
		`;
	}
}