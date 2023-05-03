$('document').ready(function () {
    $("DIVadd_item').click(function () {
	$('UL.my_list').append('<li>Item</li>');
    });
    $('$('DIVremove_item').click(function () {
        $('UL.my_list li:last').remove();
    });
    $('$('DIVremove_item').click(function () {
        $('UL.my_list').empty();
	});
});
