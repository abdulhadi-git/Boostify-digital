$(document).ready(function () {
    $('#services-section .holographic-card').each(function () {
        $(this).attr('data-bs-toggle', 'modal')
        $(this).attr('data-bs-target', '#staticBackdrop')
    })

    $('.holographic-card').click(function () {
        let description = $(this).attr('data-description');
        let img = $(this).attr('data-img');
        let title = $(this).attr('data-title')
        $('#modal-paragraph').html(description);
        $('#modal-img').attr('src', img);
        $('#staticBackdropLabel').html(title);
    })

    $('.nav-link').click(function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    })
})