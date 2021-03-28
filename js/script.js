$(document).ready(function() {
$('button').click(function start() {
		$('div.ball').animate({
			top: 340
		}, 2000).animate({
			top: 100
		}, 2000);
			setInterval(start);
		});
	$('#ball1').click(function() {
		$('#img1').animate({
			width: 100
		}, 1000);
	});
	$('#ball1').dblclick(function() {
		$('#img1').animate({
			width: 70
		});
	});
	$('#ball3').mouseenter(function() {
		$('#img3').attr('src', 'img/basketball.png').css({width:85});
	}).mouseleave(function() {
		$('#img3').attr('src', 'img/ball.png').css({width:70});
	});
});