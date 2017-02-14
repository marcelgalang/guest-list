function Comment(data) {
  this.id = data.id;
  this.content = data.content;
  this.list = data.list;
  this.user = data.user;
}
//TO DO Add user to comments

Comment.prototype.renderComment = function() {
  var html = "" ;
  html += `<li>${this.content} - ${this.user.name}</li>`;
  $("div.comments ol").append(html);
}
// <li>${this.content} - ${this.user.name}</li>
$(function() {
  $("#new_comment").on("submit", function(e) {
    e.preventDefault();
    var $new_comment = $(this);
    var action = $new_comment.attr("action");
    var data = $new_comment.serialize();
    $.ajax({
      url: action,
      data: data,
      dataType: "json",
      method: "POST"
    })
    .success(function(json) {
      $("#comment_content").val("");
      var comment = new Comment(json);
      comment.renderComment();
    })
  })
})
