class Counter {
	constructor(count = 0) {
		this.count = count;
	}
	addToCount(num = 1) {
		return (this.count += num);
	}
	removeCount() {
		if(this.count > 0) {
			return this.count--;
		}
	}
    resetCount() {
        return this.count = 0;
    }
}


class Cart {
	constructor(cartList = []) {
		this.cartList = cartList
	}
	// TODO: connect and call when using button in cart view
	addItem(item, quantity) {
		// if the item is already in the user's cart, only update the quantity, else add item to array
		if(this.cartList.find(cartItem => cartItem.id === item.id)) {
			this.cartList.find(cartItem => cartItem.id === item.id).quantity += quantity
		} else {
			this.cartList.push({...item, quantity: quantity})
		}
	}
	// TODO: connect and call when using button in cart view
	removeItem(itemId) {
		if(this.cartList.find(cartItem => cartItem.id === itemId).length > 1) {
			this.cartList.find(cartItem => cartItem.id === itemId).quantity -= 1;
		} else {
			return this.cartList = this.cartList.filter(item => item.id !== itemId);

		}
	}

}

class Product {
	constructor(name, id, price, discount, thumbnailUrl) {
		this.name = name;
		this.id = id;
		this.price = price;
		this.discount = discount;
		this.thumbnailUrl = thumbnailUrl;
	}
}

