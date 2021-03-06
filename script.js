//disable button
$('.enter-btn').attr('disabled', 'disabled');
$('.clear-btn').attr('disabled', 'disabled')

//helper functions
function counter() {
  var articleCount = $('.article').length
  var readCount = $('.visited-btn').length
  var unreadCount = articleCount - readCount
  $('.saved').text('Saved: '+ articleCount)
  $('.read').text('Read: '+ readCount)
  $('.unread').text('Unread: '+ unreadCount)
}

function clearInput() {
  $('#bm-url').val("")
  $('#bm-title').val("")
}

function validateUrl() {
  if(/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test($("#bm-url").val())){
    return true
  } else {
    return false
  }
}

$('.clear-btn').on('click', function () {
  $('.visited-btn').parent().remove();
  counter()
  $('.clear-btn').attr('disabled', 'disabled')
})

$('input').keyup(function(){
  var $title = $('#bm-title').val();
  var $url = $('#bm-url').val();
  if ($title !== "" && $url !== "") {
    $('.enter-btn').removeAttr('disabled', 'disabled');
  } else {
    $('.enter-btn').attr('disabled', 'disabled');
  }
})

$('.enter-btn').on('click', function (){
  var $title = $('#bm-title').val();
  var $url = $('#bm-url').val();
  if (validateUrl() === false) {
    alert("invalid URL");
    clearInput()
    $('.enter-btn').attr('disabled', 'disabled');
  } else {
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
  $('.enter-btn').attr('disabled', 'disabled');
  }
)

$('#web-list-section').on('click','.read-btn', function() {
  $(this).toggleClass('visited-btn');
  $(this).parent().toggleClass('visited-article');
  $('.clear-btn').removeAttr('disabled', 'disabled')
})

$('#web-list-section').on('click','.delete-btn', function() {
  $(this).parent().remove();
})

//bookmark counters
$('.enter-btn').on('click', function(){
  counter()
  clearInput()
})

$('#web-list-section').on('click', '.delete-btn', function(){
  counter()
})

$('#web-list-section').on('click', '.read-btn', function() {
  counter()
})
