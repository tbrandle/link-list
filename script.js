function disableBtn(){

}

//to add the bookmark, use jQuery .append(.article)
$('#enter-btn').on('click', function (){
  var $title = $('#bm-title').val();
  var $url = $('#bm-url').val();
  if ($title === "" || $url === "") {
    $('.input-div').append('<p class="error">ERROR: Please enter a website title and URL.</p>');
//disable enter-btn here
  } else {
    $('.error').remove();
    $('#web-list-section').append(
      `<article id="article">
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
})

//remove button
$('#web-list-section').on('click','.delete-btn', function() {
  $(this).parent().remove();
})
