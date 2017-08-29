function demo() {
    var inputImages = ['https://i.imgur.com/AAPx3rB.jpg', 'https://i.imgur.com/39dfdPw.jpg'];
    $.each(inputImages, function (i, v) {
        $('<img>', {
            src: v
        }).watermark({
            done: function (imgURL) {
                $('#content').append('<p><img src="' + imgURL + '"></p>');
            }
        });
    });

    $('.watermark').watermark({
        text: 'GOOGLE.COM',
        textWidth: 100,
        gravity: 's',
        opacity: 1,
        margin: 12
    });

}
$(function () {
    demo();
});
