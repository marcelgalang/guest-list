$(function(){
  $(document).on("submit", 'form#new_guest', function(e){
    e.preventDefault();
    var data =  $(this).serialize();
    // console.log(data)
    $.ajax({
      type: "POST",
      url: this.action,
      data: data,
      success: function(response){
       $("#guest_name").val("");
       var $listContainer = $("ul#list-container")
      //  console.log(response)
      //  console.log($listContainer)
       var formatResponse = `<li>${response.name}</li>`
       console.log(formatResponse)

       $listContainer.append(formatResponse);
      }
    });
  })
})
