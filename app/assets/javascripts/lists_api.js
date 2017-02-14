$(function() {
  bindClick()
})


function bindClick(){
// REQUIREMENT 1 Index of Events
  $(document).on('click', '.load_events', function(e){
    $.get('/api/lists', function (data) {
      // debugger
      // if newEventObject is not null
      // data.push(newEventObject)
      // console.log(data)
      $('#app-container').html('')
      data.forEach(function(list){
        var newList = new List(list.id, list.name, list.comments, list.guests, list.users, list.shared_lists)
        var formattedList = newList.formatListIndex()
        $('#app-container').append(formattedList)
      })
      // debugger
      // var newEvent = new List(list.id, list.name, list.comments, list.guests, list.users, list.shared_lists)
      // var formattedList = newList.formatListIndex()
      // $('#app-container').append(formattedList);

      var formEvent= `<form class="new_event" action= ""><input type="text" name="name" ><input type="submit" value="Add Event" ></form> `
      $('#app-container').append(formEvent)
    })
  })
  // REQUIREMENT 2 Show single Event
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

// REQUIREMENT 5 Use of prototype to format
List.prototype.formatListIndex = function(){
  var listHtml = ''
  // listHtml += `<h1>Events</h1>`
  listHtml += `<a href="#" class="list-title" data-id=${this.id}><h1>${this.name}</h1></a>`
  listHtml += '<h4>Guests Invited:' + this.guests.length + '</h4>'
  return listHtml
}

// REQUIREMENT 3 reveal has_many relationship
List.prototype.formatListShow = function(){
  const guests = this.guests.map(guest => `<li>${guest.name}</li>`).join('')
  const comments = this.comments.map(comment => `<li>${comment.content}</li>`).join('')
  const formHtml= `<form class="new_guest" action="/lists/${this.id}/guests" ><input type="text" name="name" ><input id= "event_name" type="submit" value="Add Guest" ></form> `
  var listHtml = `
                  <h1>${this.name }</h1>
                  <h2>Invited Guests:</h2>
                  <ul>
                  ${guests}
                  </ul>
                  <br>
                  <a href="/lists/${this.id}/guests">Invite Guests</a>
                  <a href="/lists/${this.id}/comments">See Comments</a>
                  `
  return listHtml
}
// Add Comment via AJAX POST
// REQUIREMENT 4
$(function(){
  $(document).on("submit", 'form#new_comment', function(e){
    e.preventDefault();
    var data =  $(this).serialize();

    $.ajax({
      type: "POST",
      url: this.action,
      data: data,
      success: function(response){
       $("#comment_content").val("");
       var $ol = $("div.comments ol")
       var formatResponse = `<li>${response.content}</li>`
       $ol.append(formatResponse);
      }
    });
  })
});


$(function(){
  $(document).on("submit", 'form#new_guest', function(e){
    e.preventDefault();
    var data =  $(this).serialize();

    $.ajax({
      type: "POST",
      url: this.action,
      data: data,
      success: function(response){
       $("#guest_name").val("");
       var $ol = $("div.guests ol")
       var formatResponse = `<li>${response.name}</li>`
       $ol.append(formatResponse);
      //  debugger
      }
    });
  })
});
