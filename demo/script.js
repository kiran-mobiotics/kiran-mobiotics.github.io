function demo() {

    $('.watermark').watermark({
        text: $('#version').val()+'\n\r'+$('#build').val(),
        textWidth: 100,
        gravity: 's',
        opacity: 1,
        margin: 12
    });

}
$(function () {
    $('#submit').on('click', function(e) {
        e.preventDefault();
        demo();
    });
});
