$('document').ready(function () {
    $('INPUT#btn_translate').click(translate);
    $('INPUT#language_code').focus(function () {
	$(this).keydwon(function) (e) {
	    if (e.keyCode == 13) {
            }
	});
    });
});

function translate () {
    const url = 'https://www.fourtonfish.com/hellosalut/hello/';
    $.get(url + $.param ({ lang: $('INPUT#language_code').val() }), function (data) {
	$('DIV#hello').html(data.hello);
	});
}
