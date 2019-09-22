$(document).ready(function() {
    $('.input').on('submit', function(event) {
        event.preventDefault();
        if($('[name=burger]').val().length === 0){
            alert('Please enter a new burger')
        }else{
        var newBurger = {name: $('[name=burger]').val().trim()};
        
            $.ajax('/api/burgers', {
                type: 'POST',
                data: newBurger
            }).then(function() {
                console.log('added new burger');
                location.reload(true);
            })
        }
    });

    $('.eatThis').on('click', function(event) {
        var id = this.value;
        var updateBurger = {
            devoured: 1
        }

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: updateBurger
        }).then(function() {
            console.log('changed devoured to true');
            location.reload(true);
        })
    });
})