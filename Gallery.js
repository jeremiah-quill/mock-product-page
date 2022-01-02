class Gallery {
	constructor(images=[], currentImgIndex = 0) {
		this.images = images;
        this.currentImgIndex = currentImgIndex;
	}
	getCurrentImg() {
        return this.images[this.currentImgIndex]
    }
	nextImg() {
        if(this.currentImgIndex === this.images.length - 1) {
            return this.currentImgIndex = 0;
        } else {
            return this.currentImgIndex++
        }
    }
    previousImg() {
        if(this.currentImgIndex === 0) {
            return this.currentImgIndex = this.images.length - 1;
        } else {
            return this.currentImgIndex--
        }
    }
}