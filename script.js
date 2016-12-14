
//disable button
$('.enter-btn').attr('disabled', 'disabled');
$('.enter-btn').toggleClass('disable-btn')

$('input').keyup(function(){
  var $title = $('#bm-title').val();
  var $url = $('#bm-url').val();
  if ($title !== "" && $url !== "") {
    $('.enter-btn').removeAttr('disabled', 'disabled');
  } else {
    $('.enter-btn').attr('disabled', 'disabled');
  }
})

//to add the bookmark, use jQuery .append(.article)
$('.enter-btn').on('click', function (){
  var $title = $('#bm-title').val();
  var $url = $('#bm-url').val();
  if ($title === "" || $url === "") {
    $('.input-div').append('<p class="error">ERROR: Please enter a website title and URL.</p>');
  } else {
    $('.error').remove();
    $('#web-list-section').prepend(
      `<article class="article">
      <div class="article-div1">
      <h2>${$title}</h2>
      </div>
      <div class="article-div2">
      <a href="${$url}">${$url}</a>
      </div>
      <button class="read-btn" type="button" name="read">Read</button>
      <button class="delete-btn" type="button" name="delete">Delete</button>
      </article>`);
  }
  }
)

//add toggleClass to the visited
$('#web-list-section').on('click','.read-btn', function() { //I needed to target the section id that was already on the page and then add add a target
  $(this).toggleClass('visited-btn');
  $(this).parent().toggleClass('article-read');
})

//remove button
$('#web-list-section').on('click','.delete-btn', function() {
  $(this).parent().remove();
})



var articleCount = 0
var readCount = 0
// var unreadCount = articleCount - readCount


function articleFn(diff) {
  if (diff === '+') {
    articleCount ++;
  } else {
    articleCount --;
  }
  $('.saved').text('Saved: '+ articleCount)
  console.log(articleCount);
}

function readFn(e) {
  if ($(e.target).hasClass('visited-btn')) {
    readCount ++;
  } else {
    readCount --;
  }
  $('.read').text('Read: '+ readCount)
  console.log(readCount);
}

$('.enter-btn').on('click', function(){
  articleFn('+')
})

$('#web-list-section').on('click', '.delete-btn', function(){
  if ($(this).siblings().hasClass('visited-btn')) {
    readCount --;
  }
  $('.read').text('Read: '+ readCount)
  articleFn('-')
})

$('#web-list-section').on('click', '.read-btn', function(e) {
  readFn(e);
})
