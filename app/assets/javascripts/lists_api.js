$(function() {
  bindClick()
})

function bindClick(){
  $('.load_events').on('click', function(e){
    // console.log('link clicked!')
    // e.preventDefault();
    $.get('/api/lists', function (data) {
      console.log(data)
      $('#app-container').html('')
      data.forEach(function(list){
        var newList = new List(list.id, list.name, list.comments, list.guests, list.users, list.shared_lists)
        var formattedList = newList.formatListIndex()
        $('#app-container').append(formattedList)
        // console.log(formattedList)
      })
    })
  })
  $(document).on('click', '.list-title', function(e){
    e.preventDefault();

    var id = $(this).data('id')
    // $.get(`/api/lists/${id}`, function (data) {
    //   console.log(data)
    //   debugger
    //   $('#app-container').html('')
    //   data.guests.forEach(function(guest){
    //     console.log(guest)
    //     // var newGuest = new Guest(guest.id, guest.name, guest.status)
    //     // var formattedGuest = newGuest.formatGuest()
    //     $('#app-container').append(guest.name)
    //     // console.log(formattedList)
    //   })
    // })

    fetch(`/api/lists/${id}`)
      .then(function (response) {
        return response.json()
      })
      .then(function(list) {
        // console.log(list)
        // debugger
        $('#app-container').html('')
        var newList = new List(list.id, list.name, list.comments, list.guests, list.users, list.shared_lists)
        var formattedList = newList.formatListShow()
        $('#app-container').append(formattedList)
        list.guests.forEach(function(guest){
            $('#app-container').append("<li>" + guest.name + "</li>")
        })
        $('#app-container').append("<h4>Comments: </h4>")
        list.comments.forEach(function(comment){
          $('#app-container').append("<li>" + comment.content + "</li>")

        })
        history.pushState(null, null, `/lists/${id}`)
      })
    // console.log('yo in here')
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
  var listHtml = ''
  listHtml += '<h1>' + this.name + '</h1>'
  listHtml += '<h2>Invited Guests:</h2>'
  return listHtml
}
