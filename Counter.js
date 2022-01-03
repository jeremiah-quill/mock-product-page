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






