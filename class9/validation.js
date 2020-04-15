$(document).ready(function () {
  $('input#submit').on('click', function () {
    var name = $('input#name')
    var email = $('input#email')
    var phone = $('input#phone')
    var required = [name, email, phone]
    for (var i = 0; i < required.length; ++i) {
      if (required[i].val() === '') {
        $('p#message')
          .text('Please Fill Out Required Fields')
          .addClass('warning')
        required[i].prev().addClass('warning')
      } else {
        required[i].prev().removeClass('warning')
      }
    }
    if ($('label.warning').length === 0) {
      $('form#form').remove()
      $('h2').text('Thanks for your feedback!')
    }
  })
})
