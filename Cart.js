class Cart {
	constructor(cartList = []) {
		this.cartList = cartList
	}
	// finds item in cartList with matching id (pass in id via data-item-id property on parent element of button)
	addItem(item, quantity) {
		// if the item is already in the user's cart, only update the quantity, else add item to array
		if(this.cartList.find(cartItem => cartItem.id === item.id)) {
			this.cartList.find(cartItem => cartItem.id === item.id).quantity += quantity
		} else {
			this.cartList.push({...item, quantity: quantity})
		}
	}
	// finds item in cartList with matching id (pass in id via data-item-id property on parent element of button)
	// if quantity of item is greater than 1 decrement quantity by 1, else remove the entire item from cartList
	removeItem(itemId) {
		if(this.cartList.find(cartItem => cartItem.id === itemId).quantity > 1) {
			this.cartList.find(cartItem => cartItem.id === itemId).quantity -= 1;
		} else {
			return this.cartList = this.cartList.filter(item => item.id !== itemId);

		}
	}
}