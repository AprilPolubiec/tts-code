$(document).ready(function () {
  var postsEl = $('#posts')

  fetch('http://jsonplaceholder.typicode.com/users/1/posts')
    .then(function (response) {
      return response.json()
    })
    .then(function (posts) {
      posts.forEach(function (post) {
        var postEl = $('<div></div>').addClass('post')
        var imgEl = $('<div></div>').addClass('post-img')
        var img = $(`<img src="./img/post${post.id}.jpg"></img>`)
        imgEl.append(img)
        var textEl = $('<div></div>')
        var titleEl = $('<h2></h2>').addClass('title').text(`${post.title}`)
        var bodyEl = $('<div></div>').addClass('body').text(`${post.body}`)
        textEl.append(titleEl, bodyEl)
        postEl.append(imgEl, textEl)
        postsEl.append(postEl)
      })
    })
})
