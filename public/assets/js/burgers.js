$(function() {
    $(".devour-it").on("click", function(event) {
        var id = $(this).data("id");
        var currentdev = $(this).data("newdev");
        var newdev;
        
        if (currentdev == 0){
            newdev = 1;
        } else {
            newdev = 0;
        }

        var newDevState = {
            id: id,
            devoured: newdev
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevState
        }).then(function() {

            location.reload();
        });
    });  

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var name = $("[name=burger-name]").val().trim();

        if(name !== "") {
            var newBurger = {
                name: name
            };

            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function() {
   
                location.reload();
            });
        }
        else {
            $("[name=burger-name]").val("");
        }
    }); 
});