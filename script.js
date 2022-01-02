const toggleBackdrop = () => {
	let backdrop = document.querySelector(".backdrop");

	if (backdrop.classList.contains("active-backdrop")) {
		backdrop.classList.remove("active-backdrop");
	} else {
		backdrop.classList.add("active-backdrop");
	}
};

const toggleSidebar = () => {
	let sidebar = document.querySelector(".sidebar");

	if (sidebar.classList.contains("visible")) {
		sidebar.classList.remove("visible");
	} else {
		sidebar.classList.add("visible");
	}

};

const toggleCart = (userCart) => {
	let cart = document.querySelector(".cart");

	if (cart.classList.contains("active-cart")) {
		cart.classList.remove("active-cart");
	} else {
		cart.classList.add("active-cart");
        renderCartList(userCart.cartList)


		document.querySelector(".cart-item-count").textContent =
			userCart.count;
	}
};

document.querySelector(".hamburger").addEventListener("click", () => {
	toggleSidebar();
	toggleBackdrop();
});

document.querySelector(".close-menu").addEventListener("click", () => {
	toggleSidebar();
	toggleBackdrop();
});

document.querySelector(".cart-icon").addEventListener("click", () => {
	toggleCart(userCart);
	toggleBackdrop();
});

document.querySelector(".close-cart").addEventListener("click", () => {
	toggleCart(userCart);
	toggleBackdrop();
});

const renderCount = (count) => {
	let quantity = document.querySelector(".quantity");
	quantity.textContent = count;
};

const renderCartQuant = (quant) => {
    let cartNotification = document.querySelector('.cart-notification');

    if(quant > 0) {
        cartNotification.textContent = quant;
    } else {
        cartNotification.textContent = '';
    }
}


// Quantity and Cart
// Create new counter
let counter = new Counter();
let plusButton = document.querySelector(".plus");
let minusButton = document.querySelector(".minus");

// add count when plus button is clicked, then re-render the counter
plusButton.addEventListener("click", () => {
	counter.addToCount();
	renderCount(counter.count);
});

// remove count when minus button is clicked, then re-render the counter
minusButton.addEventListener("click", () => {
	counter.removeCount();
	renderCount(counter.count);
});

// create new cart
let userCart = new Cart();
// create test product to work with
let testProduct = new Product('test-product', 1, 10.99, .1);


let addToCart = document.querySelector(".add-to-cart");

// add item to cart
addToCart.addEventListener("click", () => {
    // add item to cart, and give that item a quantity (based on the counter)
    userCart.addItem(testProduct, counter.count)
    // reset counter
    renderCount(0)
    counter.resetCount();
    // sum the quantities of each item in userCart
    renderCartQuant(userCart.cartList.reduce((total, item) => item.quantity + total, 0))
});


// Large Image Gallery
const gallery = new Gallery(['./images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg'])

const renderGalleryImg = () => {
    const showcaseImg = document.querySelector('.showcase-img');
    showcaseImg.setAttribute('src', gallery.getCurrentImg())
}

const next = document.querySelector('.next');
const previous = document.querySelector('.previous');

next.addEventListener('click', () => {
    gallery.nextImg();
    renderGalleryImg();
})
previous.addEventListener('click', () => {
    gallery.previousImg();
    renderGalleryImg();
})

const renderCartList = (cart) => {
    cart.forEach(item => {
        let itemEl = document.createElement('div')
        itemEl.innerHTML =  `							
        
    <div class="cart-item">
        <img
            class="cart-item-thumbnail"
            src="images/image-product-1-thumbnail.jpg"
            alt="thumbnail image of selected product"
        />
        <div class="cart-item-details truncate">
            <div class="cart-item-name truncate">
                ${item.name}
            </div>
            <div class="cart-item-pricing">
                <div class="cart-item-price">${item.price}&nbsp;</div>
                <div class="cart-item-quantity-container">
                    x<span class="cart-item-quantity">${item.quantity}&nbsp;</span>
                </div>
                <div class="cart-item-subtotal">${item.price * item.quantity}</div>
            </div>
        </div>
        <div class="cart-quantity-buttons">
            <button class="remove-item">
                <img src="images/icon-minus.svg" alt="minus icon" />
            </button>
            <button class="add-item">
                <img src="images/icon-plus.svg" alt="plus icon" />
            </button>
        </div>
    </div>`

        document.querySelector('.cart-items').appendChild(itemEl)


    })
}

renderCartList(userCart.cartList)






