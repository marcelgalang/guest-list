$(function(){
  $("input.toggle").on("change", function(){
    $(this).parents("form").trigger("submit")
  })
});

// show index ala Cernan
// 
// $(function() {
//   bindClick()
// })

function bindClick(){
  $('a.load_events').on('click', function(e){
    console.log('link clicked!')
    e.preventDefault();
    // $.get('/api/lists', function (data) {
    //   console.log('link clicked!')
    // })
  })
}

function List(id, name){
  this.id = id
  this.name = name
}

List.prototype.formatListsIndex = function(){
  var listHtml = ''
  listHtml += '<p>${this.name}</p>'
  return commentHtml

}

// Last Avi blanket function
// $(function(){
//   $("a.load_events").on("click", function(e){
//     debugger
//     $.ajax({
//       debugger
//       url: url,
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

//Index of event lists
// $(function(){
//   $('a.load_events').on("click", function(e){
//     $.get(this.href).success(function(json){
//       console.log("It Worked!")
//       // console.log(json)
//       // debugger
//       // clear the OL html (in case there were stale comments)
//       //  var $ol = $("div.comments ol")
//
//       var $label = $("div.view label a")
//       $label.html("")
//
//       //  $ol.html("") // emptied the OL
//        json.forEach(function(view){
//        console.log(view.name)
//          $label.append("<a href>" + view.name + "</a>");
//        })
//     })
//     e.preventDefault();
//   })
// })


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
