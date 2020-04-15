$(document).ready(function () {
  var header = $('header')
  console.log(header[0])

  var sections = $('section')
  console.log(sections[0])

  var currentSection = $('section.current')
  console.log(currentSection[0])

  var nextSection = currentSection.next()
  console.log(nextSection[0])

  var prevh2 = currentSection.prev().children()[0]
  console.log(prevh2)

  var divOfHighlightH2 = $('h2.highlight').parent().parent()
  console.log(divOfHighlightH2[0])

  var sectionsWithH2s = Array.from($('section').find('h2').parent())
  console.log(sectionsWithH2s)
})
