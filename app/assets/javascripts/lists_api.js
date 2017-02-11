$(function() {
  bindClick()
})

function bindClick(){
  $('.load_events').on('click', function(e){
    // console.log('link clicked!')
    // e.preventDefault();
    $.get('/api/lists', function (data) {
      console.log(data)
      $('#all-events').html('')
      data.forEach(function(list){
        var newList = new List(list.id, list.name, list.comments, list.guests, list.users, list.shared_lists)
        var formattedList = newList.formatListIndex()
        $('#all-events').append(formattedList)
        // console.log(formattedList)
      })
    })
    e.preventDefault();
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
  listHtml += '<h1>Event: '+ this.name + '</h1>'
  listHtml += '<h4>Guests Invited:' + this.guests.length + '</h4>'
  return listHtml

}
