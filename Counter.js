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

// class Cart extends Counter {
// 	constructor(cartList = []){
// 		super();
// 		this.cartList = cartList;
// 	}
// }

class Cart {
	// {
	// 	name: 'name',
	// 	id: 'id',
	// 	price: 100.00,
	// 	discount: .1,
	//  quantity: 1,
	// }

	constructor(cartList = []) {
		this.cartList = cartList
	}
	addItem(item, quantity) {
		this.cartList.push({...item, quantity: quantity})
	}
	removeItem(itemId) {
		return this.cartList.filter(item => item.id !== itemId);
	}

}

class Product {
	constructor(name, id, price, discount) {
		this.name = name;
		this.id = id;
		this.price = price;
		this.discount = discount;
	}
}

