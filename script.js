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
          <div class="article-div3">
            <button class="read-btn" type="button" name="read">Read</button>
            <button class="delete-btn" type="button" name="delete">Delete</button>
          </div>
        </article>`)
  }
)
