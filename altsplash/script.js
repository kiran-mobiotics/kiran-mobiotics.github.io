function mark() {

    $('.fhd').watermark({
        text: $('#version').val()+" "+$('#build').val(),
        textWidth: 300,
        textSize: 26,
        margin: 150
    });
    $('.hd').watermark({
        text: $('#version').val()+" "+$('#build').val(),
        textWidth: 100,
        textSize: 15,
        margin: 100
    });
    $('.sd').watermark({
        text: $('#version').val()+" "+$('#build').val(),
        textWidth: 80,
        textSize: 13,
        margin: 75
    });

}
$(function () {
    $('#submit').on('click', function(e) {
        e.preventDefault();
        mark();
    });
});
