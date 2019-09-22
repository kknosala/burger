$(document).ready(function() {
    $('.input').on('submit', function(event) {
        event.preventDefault();
        var newBurger = {name: $('[name=burger]').val().trim()};

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function() {
            console.log('added new burger');
            location.reload();
        })
    })
})