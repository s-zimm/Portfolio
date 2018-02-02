// Ensuring active nav highlight on click
$('.nav a').on('click', (event) => {
    // $('.nav').find('.active').removeClass('active');
    // $(event.target).parent().addClass('active');
    $(".navbar-collapse").collapse('hide');
});

// Transitions to different parts of page
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop':  $target.offset().top
    }, 650, 'swing', function () {
        window.location.hash = target;
    });
});

// Transition for hovering over skill
$('.skill-group i').hover((event) => {
    $('.icon-name').filter($(event.target).siblings()).removeClass('hide');
    $('.skill-group i').not($(event.target)).each( (index, element) => {
        element = $(element);
        element.addClass('dull');
    })
}, () => {
    $('.skill-section i').each( (index, element) => {
        $('.icon-name').filter($(event.target).siblings()).addClass('hide');
        element = $(element);
        element.removeClass('dull');
    })
});

// // On window resize event for skills
// $(window).resize(event => {
//     if ($(window).width() > 1000) {
//         let detached = $('#sg1').detach();
//         detached.appendTo($('#ss1'));
//     }

    
// })