//to add the bookmark, use jQuery .append(.article)
$('#enter-btn').on('click', function (){
  var $title = $('#bm-title').val();
  var $url = $('#bm-url').val();
  $('#web-list-section').append(
      `<article id="article">
          <div class="article-div1">
            <h2>${$title}</h2>
          </div>
          <div class="article-div2">
            <a href="">${$url}</a>
          </div>
          <div>
            <button class="read-btn" type="button" name="read">Read</button>
            <button class="delete-btn" type="button" name="delete">Delete</button>
          </div>
        </article>`)
  }
)

//add toggleClass to the visited
$('#web-list-section').on('click','.read-btn', function() { //I needed to target the section id that was already on the page and then add add a target
  $(this).toggleClass('visited-btn');
  $(this).parentsUntil($('#article')).toggleClass('visited-article');
})
