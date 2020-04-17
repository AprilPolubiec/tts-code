// Create buttons that do each of the tasks below:
//  Render the results to the page in html elements.
//  Hide the results from the previous actions
//  Get all posts
//  Get post with id of 10
//  Get the comments from post with id of 12
//  Get all the posts from user with id of 2
//  Create a new post and log the id generated for it by the server
//  Replace the post with id of 12 and render the responseJSON
//  Update the title of post with id of 12 and render responseJSON
//  Delete the post with id of 12 and render a success message
//  Display a list of posts.
//   When the user clicks on a post, display all the comments from that post
//    Display a link back to all posts

$(document).ready(function () {
  var button1 = $('#btn1')
  var button2 = $('#btn2')
  var button3 = $('#btn3')
  var button4 = $('#btn4')
  var button5 = $('#btn5')
  var button6 = $('#btn6')
  var button7 = $('#btn7')
  var button8 = $('#btn8')
  var button9 = $('#btn9')
  var results = $('#results')

  button1.on('click', function () {
    results.text('')
    $.get('http://jsonplaceholder.typicode.com/users', function (users) {
      users.forEach(function (user) {
        var text = $('<p></p>').text(JSON.stringify(user))
        results.append(text)
      })
    })
  })

  button2.on('click', function () {
    results.text('')
    $.get('http://jsonplaceholder.typicode.com/posts/1', function (post) {
      results.text(JSON.stringify(post))
    })
  })

  button3.on('click', function () {
    results.text('')
    $.get('http://jsonplaceholder.typicode.com/posts/12/comments', function (
      comments
    ) {
      comments.forEach(function (comment) {
        var text = $('<p></p>').text(JSON.stringify(comment))
        results.append(text)
      })
    })
  })

  button4.on('click', function () {
    results.text('')
    $.get('http://jsonplaceholder.typicode.com/users/2/posts', function (
      posts
    ) {
      posts.forEach(function (post) {
        var text = $('<p></p>').text(JSON.stringify(post))
        results.append(text)
      })
    })
  })

  button5.on('click', function () {
    results.text('')
    $.post(
      'http://jsonplaceholder.typicode.com/posts',
      {
        title: 'My Post',
        body: 'This is my new post.',
        userId: 1,
      },
      function (response) {
        results.text(response.id)
      }
    )
  })

  button6.on('click', function () {
    results.text('')
    $.ajax({
      method: 'PUT',
      url: 'http://jsonplaceholder.typicode.com/posts/12',
      data: { title: 'My Post', body: 'This is my new post.', userId: 2 },
      complete: function (response) {
        //handle response which usually includes the updated object.
        // console.log(response)
        results.text(JSON.stringify(response.responseJSON))
      },
    })
  })
  button7.on('click', function () {
    results.text('')
    $.ajax({
      method: 'PATCH',
      url: 'http://jsonplaceholder.typicode.com/posts/12',
      data: { title: 'New Title' },
      complete: function (response) {
        //handle response which usually includes the updated object.
        // console.log(response)
        results.text(JSON.stringify(response.responseJSON))
      },
    })
  })
  button8.on('click', function () {
    results.text('')
    $.ajax({
      method: 'DELETE',
      url: 'http://jsonplaceholder.typicode.com/posts/12',
      complete: function (response) {
        results.text('Success!')
      },
    })
  })
  button9.on('click', function () {
    results.text('')
    $.get('http://jsonplaceholder.typicode.com/posts', function (posts) {
      posts.forEach(function (post) {
        var text = $('<p></p>').text(JSON.stringify(post))
        results.append(text)
        text.on('click', function () {
          $.get(
            `http://jsonplaceholder.typicode.com/posts/${post.id}/comments`,
            function (comments) {
              comments.forEach(function (comment) {
                var commentString = $('<p></p>').text(JSON.stringify(comment))
                text.append(commentString)
              })
            }
          )
        })
      })
    })
  })
})
