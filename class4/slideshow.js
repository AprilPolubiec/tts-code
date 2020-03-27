var slideshow = {
  photoList: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
  currentPhotoIndex: 0,
  nextPhoto: function() {
    if (this.currentPhotoIndex + 1 < this.photoList.length){
      this.currentPhotoIndex += 1;
      console.log(this.photoList[this.currentPhotoIndex]);
    } else{
      console.log('End of slideshow');
    }
  },
  prevPhoto: function(){
    if (this.currentPhotoIndex - 1 >= 0){
      this.currentPhotoIndex -= 1;
      console.log(this.photoList[this.currentPhotoIndex]);
    } else {
      console.log('End of slideshow');
    }
  },
  getCurrentPhoto: function(){
    return this.photoList[this.currentPhotoIndex];
  }
}

console.log(slideshow.getCurrentPhoto())
slideshow.nextPhoto()
slideshow.nextPhoto()
slideshow.nextPhoto()