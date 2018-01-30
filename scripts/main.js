// Ensuring active nav highlight on click
$('.nav a').on('click', (event) => {
    $('.nav').find('.active').removeClass('active');
    $(event.target).parent().addClass('active');
    $(".navbar-collapse").collapse('hide');
});

// Transitions to different parts of page
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop':  $target.offset().top
    }, 700, 'swing', function () {
        window.location.hash = target;
    });
});

// Transition for hovering over skill
$('#skills i').hover((event) => {
    $('#skills i').not($(event.target)).each( (index, element) => {
        element = $(element);
        element.addClass('dull');
    })
}, () => {
    $('.skill-section i').each( (index, element) => {
        element = $(element);
        element.removeClass('dull');
    })
});