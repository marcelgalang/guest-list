$(function(){
  $("input.toggle").on("change", function(){
    $(this).parents("form").trigger("submit")
  })
});

$(function() {
  bindClick()
})

// show index ala Cernan

function bindClick() {
  $('a.load_comments').on('click', function(){
    $.get('/api/lists/:id/comments'), function(data){
      $('#app-container').html('')
      data.forEach(function(post){
        var newComment = new Comment(comment.id, comment.content, comment.list_id);
        var formattedComment = newComment.formatCommentsIndex()
        $('#app-container').append(formattedComment)

      })
       e.preventDefault();
    }
  })
}

function Comment(id, content, list_id){
  this.id = id
  this.content = content
  this.list_id = list_id
}

Comment.prototype.formatCommentsIndex = function(){
  var commentHtml = ''
  commentHtml += '<p>${this.content}</p>'
  return commentHtml

}

// Last Avi blanket function
// $(function(){
//   $("a.load_comments").on("click", function(e){
//
//     $.ajax({
//       url: this.href,
//       dataType: 'script'
//     })
//
//     e.preventDefault();
//   })
// })



//     // Requesting HTML
    // $.get(this.href).success(function(response){
    //   $("div.comments").html(response)
    // })
//
//     // Requesting JSON
//     $.get(this.href).success(function(json){
// //     //   // clear the OL html (in case there were stale comments)
//       var $ol = $("div.comments ol")
//       $ol.html("") // emptied the OL
//       // iterate over each comment within json
//       json.forEach(function(comment){
//         // with each comment data, append an LI to the OL with the comment content
//         $ol.append("<li>" + comment.content + "</li>");
//       })
//     })
// //
//     e.preventDefault();
//   })
// })
//
//
// Submit Comments via AJAX - Soon to be replaced by remote true
// $(function(){
//   $("#new_comment").on("submit", function(e){
//     // 1. we need the URL to submit the POST request too
//     // 2. we need the form data.
//
//     // Low level
//     $.ajax({
//       type: ($("input[name='_method']").val() || this.method),
//       url: this.action,
//       data: $(this).serialize();, // either JSON or querystring serializing
//       success: function(response){
//         $("#comment_content").val("");
//         var $ol = $("div.comments ol")
//         $ol.append(response);
//       }
//     });
//
//     // Send a POST request to the correct place that form would've gone too anyway
//     // along with the actual form data.
//     e.preventDefault();
//   })
// });
