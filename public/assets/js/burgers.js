$(function() {
    $(".devour-it").on("click", function(event) {
        var id = $(this).data("id");
        console.log(id);

        var munch = {
            devoured: true
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: munch
        }).then(function() {

            location.reload();
        });
    });  

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
            name = $("#new-burger").val().trim();
        if(name !== "") {
            console.log("theres stuff here");
            var newBurger = {
                name: name
            };

            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function() {
                console.log("you did the thing!");
                location.reload();
            });
        }
        else {
            alert("Please input a new burger first");
        }
    }); 
});
