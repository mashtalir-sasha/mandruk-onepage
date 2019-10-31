$(function() {

	// Отправка формы
	$('form').submit(function() {
		var data = $(this).serialize();
		var goalId = $(this).find('input[ name="goal"]').val();
		data += '&ajax-request=true';
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			dataType: 'json',
			data: data,
			success: (function() {
				$.fancybox.close();
				$.fancybox.open("<div class='thn'><h3>Дякуємо за Вашу заявку!</h3><p>Наш фахівець протягом години зв'яжеться з Вами і розповість докладніше про навчальний заклад і методологію навчання.</p></div>");
				//gtag('event','submit',{'event_category':'submit','event_action':goalId});
				fbq('track', 'Lead');
			})()
		});
		return false;
	});

	// Инит фансибокса
	$('.fancybox').fancybox({
		margin: 0,
		padding: 0
	});

});
