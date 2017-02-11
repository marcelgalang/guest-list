$(function(){
  $("input.toggle").on("change", function(){
    $(this).parents("form").trigger("submit")
  })
});

// show index ala Cernan

$(function() {
  bindClick()
})

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

function Comment(id, content, list_id, user_id){
  this.id = id
  this.content = content
  this.list_id = list_id
  this.user_id = user_id
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
//       debugger
//       url: this.href
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
// $(function(){
//   $("a.load_comments").on("click", function(e){
//     $.get(this.href).success(function(json){
//       debugger
//
//       // clear the OL html (in case there were stale comments)
//       // var $ol = $("div.comments ol")
//       // $ol.html("") // emptied the OL
//       //
//       // // iterate over each comment within json
//       // json.forEach(function(comment){
//       //   // with each comment data, append an LI to the OL with the comment content
//       //   // $ol.append("<li>" + comment.content + "</li>");
//       //   debugger
//       //   })
//       e.preventDefault();
//     })
//   })
$(function(){
  $("a.load_comments").on("click", function(e){
    $.get(this.href).success(function(json){

      // clear the OL html (in case there were stale comments)
       var $ol = $("div.comments ol")
       $ol.html("") // emptied the OL
       json.forEach(function(comment){

         $ol.append("<li>" + comment.content + "</li>");
       })
    })
    e.preventDefault();
  })
})
//


//
//
// Submit Comments via AJAX - 
$(function(){
  $("#new_comment").on("submit", function(e){
    // alert("You been clickin")
    // url = this.action
    var data =  $(this).serialize();

    $.ajax({
      type: "POST",
      url: this.action,
      data: data,
      success: function(response){
        // debugger
        $("#comment_content").val("");
        var $ol = $("div.comments ol")
        $ol.append(response);
      }

    });

    e.preventDefault();
  })
});
