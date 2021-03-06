function mark() {

    $('.fhd').watermark({
        text: $('#version').val()+"."+$('#build').val(),
        textWidth: 300,
        textSize: $('#fnt-siz').val(),
        margin: 150
    });
    $('.hd').watermark({
        text: $('#version').val()+"."+$('#build').val(),
        textWidth: 100,
        textSize: $('#fnt-siz').val()*0.667,
        margin: 100
    });
    $('.sd').watermark({
        text: $('#version').val()+"."+$('#build').val(),
        textWidth: 80,
        textSize: $('#fnt-siz').val()*0.5 ,
        margin: 75
    });

}
$(function () {
    $('#submit').on('click', function(e) {
        e.preventDefault();
        mark();
    });
});
