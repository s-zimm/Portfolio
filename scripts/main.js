$('.nav a').on('click', (event) => {
    $('.nav').find('.active').removeClass('active');
    $(event.target).parent().addClass('active');
});