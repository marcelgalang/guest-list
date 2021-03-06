'use strict';

$(function () {
  bindClick();
});


function bindClick() {
  // REQUIREMENT 1 Index of Events
  $(document).on('click', '.load_events', function (e) {
    e.preventDefault();
    $.get('/api/lists', function (data) {

      $('#list-container').html('');
      $('#form-container').html('');
      data.forEach(function (list) {
        var newList = new List(list.id, list.name, list.comments, list.guests, list.users, list.shared_lists);
        var formattedList = newList.formatListIndex();
        $('#list-container').append(formattedList);
      });
      var newEvent = '<form class="new-todo" id="new_list" action="/lists" accept-charset="UTF-8" method="post"><label for="list_name">Create A New Event</label> <input type="text" name="list[name]" id="list_name" class="new_todo"></p></form>';

      $('#form-container').html(newEvent);
    });
    history.pushState(null, null, '/lists');
  });

  // returns event form data and appends to Event array
  $(document).on("submit", 'form#new_list', function (e) {
    e.preventDefault();
    var data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: this.action,
      data: data,
      success: function success(response) {
        // console.log(response)
        $("#list_name").val("");
        var $listTitle = $("#list-container ");
        var newList = new List(response.id, response.name, response.comments, response.guests, response.users, response.shared_lists);
        var formattedList = newList.formatListIndex();
        $listTitle.append(formattedList);

      }
    });
  });

  // REQUIREMENT 2 Show single Event
  $(document).on('click', '.list-title', function (e) {
    e.preventDefault();
    $('#form-container').html('');
    var id = $(this).data('id');
    fetch('/api/lists/' + id).then(function (response) {
      return response.json();
    }).then(function (list) {
      $('#list-container').html('');
      var newList = new List(list.id, list.name, list.comments, list.guests, list.users, list.shared_lists);
      var formattedList = newList.formatListShow();
      $('#list-container').append(formattedList);
    });
    history.pushState(null, null, '/lists/' + id);
  });
}

function List(id, name, comments, guests, shared_lists, users) {
  this.id = id;
  this.name = name;
  this.comments = comments;
  this.guests = guests;
  this.users = users;
  this.shared_lists = shared_lists;
}

// REQUIREMENT 5 Use of prototype to format
List.prototype.formatListIndex = function () {
  var listHtml = '';
  listHtml += '<a href="#" class="list-title" data-id=' + this.id + '><h2>' + this.name + '</h2></a>';
  listHtml += '<h5>Guests Invited:' + this.guests.length + '</h5>';
  return listHtml;
};

// REQUIREMENT 3 reveal has_many relationship
List.prototype.formatListShow = function () {
  var guests = this.guests.map(function (guest) {
    return '<li>' + guest.name + '</li>';
  }).join('');
  var comments = this.comments.map(function (comment) {
    return '<li>' + comment.content + '</li>';
  }).join('');

  var formHtml = '<form class="new_todo" id="new_guest" action="/lists/' + this.id + '/guests" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="text" name="guest[name]" id="guest_name"><input type="submit" name="commit" value="Invite guest"></form>';
  var listHtml = '\n                  <h1>' + this.name + '</h1>\n                  <h2>Invited Guests:</h2>\n                  <ul id="list-container">\n                  ' + guests + '\n                  </ul>\n                  <br>\n                  ' + formHtml + '\n                  <a href="/lists/' + this.id + '/comments" id="comment-view">See Comments</a>\n                  ';

  return listHtml;
};

$(function () {
  $(document).on("submit", 'form#new_guest', function (e) {
    e.preventDefault();
    var data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: this.action,
      data: data,
      success: function success(response) {
        $("#guest_name").val("");
        var $listContainer = $("ul#list-container");
        var formatResponse = '<li>' + response.name + '</li>';
        console.log(formatResponse);

        $listContainer.append(formatResponse);
      }
    });
  });
});

// Add Comment via AJAX POST
// REQUIREMENT 4
$(function () {
  $(document).on("submit", 'form#new_comment', function (e) {
    e.preventDefault();
    var data = $(this).serialize();

    $.ajax({
      type: "POST",
      url: this.action,
      data: data,
      success: function success(response) {
        $("#comment_content").val("");
        var $ol = $("div.comments ol");
        var formatResponse = '<li>' + response.content + '</li>';
        $ol.append(formatResponse);
      }
    });
  });
});
