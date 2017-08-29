function demo() {

    $('.watermark').watermark({
        text: $('#version').val()+"\n"+$('#build').val(),
        textWidth: 100,
        textColor: 'white',
        textBg: 'rgba(0, 0, 0, 0)',
        gravity: 's',
        opacity: 1,
        margin: 16
    });

}
$(function () {
    $('#submit').on('click', function(e) {
        e.preventDefault();
        demo();
    });
});
