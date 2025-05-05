"use strict";

const productsObj = {
    product1:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    product2:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    product3:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    product4:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    product5:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    product6:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    product7:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    product8:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    product9:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    product10:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
};
const cssObj = {
    li: "card-shop",
    ul: "cards-shop",
    active: "active-shop"
};

class ProductCards {
    constructor(productsObj, cssObj) {
        this.productsObj = productsObj;
        this.cssObj = cssObj;
    }

    createCardProduct(imgSrc) {
        const cardProduct = document.createElement("li");
        cardProduct.className = this.cssObj.li;
        const imgProduct = document.createElement("img");
        imgProduct.src = imgSrc;
        cardProduct.append(imgProduct);
        return cardProduct;
    }

    createCardsProduct() {
        const cardsProduct = document.createElement("ul");
        cardsProduct.className = this.cssObj.ul;
        for (const key in this.productsObj) {
            const imgSrc = this.productsObj[key];
            cardsProduct.append(this.createCardProduct(imgSrc));
        }
        return cardsProduct;
    }

    getActive = (event) => {
        const liActive = event.target.closest(`.${this.cssObj.li}`);
        if (liActive) {
            liActive.classList.toggle(this.cssObj.active);
        }
    };

    render(containerSelector) {
        const container = document.querySelector(containerSelector);
        const cards = this.createCardsProduct();
        cards.addEventListener("click", this.getActive);
        container.append(cards);
    }
}

const productCards = new ProductCards(productsObj, cssObj);
productCards.render(".container-5");
