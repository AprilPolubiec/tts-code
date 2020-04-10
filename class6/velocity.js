var time = 0
var gravity = 0.5

function Particle(startX, startY) {
  this.x = startX
  this.y = startY
  this.velocity = {
    x: 0,
    y: 0
  }
}

Particle.prototype = {
  getVelocity: function() {
    return time * gravity;
  },
  move: function() {
    if (this.y >= 500) {
      console.log('bottom')
    } else {
      this.y += this.getVelocity()
    }
  }
}

var particles = []

for (let i = 0; i < 100; i++) {
  particles.push(new Particle(i, Math.random() * 500))
}

setInterval(function() {
  time += 1
  particles.filter(function(particle){
    console.log(particle.x)
    return particle.y < 500
  }).forEach(function(particle){
    particle.move()
  })
  // particles.forEach(function(particle) {
  //   console.log(particle.x)
  //   if (particle.y < 500) {
  //     yArr.push(particle)
  //   }
  // })
  // return yArr
}, 100)
