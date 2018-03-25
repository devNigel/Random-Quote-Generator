$(function () {

    quoteGen();

});

function quoteGen() {

    $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
        type: 'GET',
        data: {},
        dataType: 'json',
        success: function (data) {

            $('#qt').text(data.quote);
            $('#author').text("- " + data.author);
        },
        error: function (err) { alert(err); },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "fWYuBOisyLmshrCCtVHJ2DkQQ9dUp1PU1hYjsnr8iAS2i8Cnvk");
        }
    });

}

function tweetQuote() {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent($('#qt').text()) + " - " + encodeURIComponent($('#author').text()));

}