var slideshow = {
  photoList: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
  currentPhotoIndex: 0,
  nextPhoto: function() {
    if (this.currentPhotoIndex + 1 < this.photoList.length){
      this.currentPhotoIndex += 1;
      this.getCurrentPhoto();
    } else{
      console.log('End of slideshow');
      this.pause()
    }
  },
  prevPhoto: function(){
    if (this.currentPhotoIndex - 1 >= 0){
      this.currentPhotoIndex -= 1;
      this.getCurrentPhoto();
    } else {
      console.log('End of slideshow');
      this.pause()
    }
  },
  getCurrentPhoto: function(){
    return this.photoList[this.currentPhotoIndex];
  },
  playInterval: null,
  play: function(){
    this.playInterval = setInterval(this.nextPhoto.bind(this), 2000)
  },
  pause: function(){
    clearInterval(this.playInterval)
  },
  reverse: function(){
    this.playInterval = setInterval(this.nextPhoto.bind(this), 2000)
  }
}

slideshow.play()
//TODO: add reverse
//TODO: add display current