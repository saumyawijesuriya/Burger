// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newburger = $(this).data("newburger");
  
      var newburgerState = {
        devour: newburger
      };
  
      // Send the PUT request.
      $.ajax("/api/eat/" + id, {
        type: "PUT",
        data: newburgerState
      }).then(
        function() {
          console.log("changed burger to", newburger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newburg1 = {
        name: $("#ca").val().trim(),
        devour: $("[name=devour]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/eat", {
        type: "POST",
        data: newburg1
      }).then(
        function() {
          console.log("added new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/eat/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  