$(function(){
  $(document).on("submit", 'form#new_comment', function(e){
    e.preventDefault();
    var data =  $(this).serialize();
    // console.log(data)
    $.ajax({
      type: "POST",
      url: this.action,
      data: data,
      success: function(response){
       $("#comment_content").val("");
       var $listContainer = $("ol#list-container")
      //  console.log(response)
      //  console.log($listContainer)
       var formatResponse = `<li>${response.content}</li>`
       console.log(formatResponse)
       $listContainer.append(formatResponse);
      }
    });
  })
})

$(document).on('click', '#comment-view', function(e) {
  e.preventDefault();
  console.log(e)
  $.get(this.url).success(function(data){

    // clear the OL html (in case there were stale comments)
    var $ol = $("div.comments ol")
    $ol.html("") // emptied the OL
debugger
    // iterate over each comment within json
    // json.forEach(function(comment){
    //   // with each comment data, append an LI to the OL with the comment content
    //   $ol.append("<li>" + comment.content + "</li>");
    // })
  })
//
//
//     // load that response into the HTML of the page.
//   //   e.preventDefault();

})
