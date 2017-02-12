$(function() {
  bindClick()
})

function bindClick(){
  $('.load_events').on('click', function(e){
    $.get('/api/lists', function (data) {
      console.log(data)
      $('#app-container').html('')
      data.forEach(function(list){
        var newList = new List(list.id, list.name, list.comments, list.guests, list.users, list.shared_lists)
        var formattedList = newList.formatListIndex()
        $('#app-container').append(formattedList)
      })
    })
  })
  $(document).on('click', '.list-title', function(e){
    e.preventDefault();

    var id = $(this).data('id')
    fetch(`/api/lists/${id}`)
      .then(function (response) {
        return response.json()
      })
      .then(function(list) {
        // console.log(list)
        //
        $('#app-container').html('')
        var newList = new List(list.id, list.name, list.comments, list.guests, list.users, list.shared_lists)
        var formattedList = newList.formatListShow()
        $('#app-container').append(formattedList)

      })
      history.pushState(null, null, `/lists/${id}`)
  })
}

function List(id, name, comments, guests, shared_lists, users){
this.id = id
this.name = name
this.comments= comments
this.guests= guests
this.users= users
this.shared_lists= shared_lists
}

List.prototype.formatListIndex = function(){
  var listHtml = ''
  listHtml += `<a href="#" class="list-title" data-id=${this.id}><h1>Event: ${this.name}</h1></a>`
  listHtml += '<h4>Guests Invited:' + this.guests.length + '</h4>'
  return listHtml
}

List.prototype.formatListShow = function(){
  const guests = this.guests.map(guest => `<li>${guest.name}</li>`).join('')
  const comments = this.comments.map(comment => `<li>${comment.content}</li>`).join('')
  const formHtml= `<form class="new_comment" id="new_comment" action="/lists/${this.id}/comments" accept-charset="UTF-8" method="post">Add Comment:<input name="utf8" type="hidden" value="✓"><input type="textarea" name="comment[content]" id="comment_content"><br><input type="submit" name="commit"></form>`
  var listHtml = `
                  <h1>${this.name }</h1>
                  <h2>Invited Guests:</h2>
                  <ul>
                  ${guests}
                  </ul>
                  <br>
                  <a href="/lists/${this.id}/comments">See Comments</a>
                  `
  return listHtml
}

$(function(){
  $("#new_comment").on("submit", function(e){
    // alert("You been clickin")
    // url = this.action
    var data =  $(this).serialize();
    debugger
    // $.ajax({
    //   type: "POST",
    //   url: this.action,
    //   data: data,
    //   success: function(response){
    //     // debugger
    //     $("#comment_content").val("");
    //     var $ol = $("div.comments ol")
    //     $ol.append(response);
    //   }
      $.post(this.action, function(data){
        $("#comment_content").val("");
        var $ol = $("div.comments ol")
        $ol.append(response);
      });

    // });

    e.preventDefault();
  })
});

// $.post( this.action, function( $(this).serialize() ) {
//   $("#comment_content").val("");
//   var $ol = $("div.comments ol")
//   $ol.append(response);
// });

// $(function(){
//   $("#new_comment").on("submit", function(e){
//     // alert("You been clickin")
//     // url = this.action
//     var data =  $(this).serialize();
//     // debugger
//     $.ajax({
//       type: "POST",
//       url: this.action,
//       data: data,
//       success: function(response){
//         // debugger
//         $("#comment_content").val("");
//         var $ol = $("div.comments ol")
//         $ol.append(response);
//       }
//
//     });
//
//     e.preventDefault();
//   })
// });
