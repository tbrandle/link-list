//to add the bookmark, use jQuery .append(.article)


$('#enter-btn').on('click', function(){
  $('.article-div1 h2').text($('#bm-title').val());
  $('#article').clone().appendTo('#web-list-section');

})
