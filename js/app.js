$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		})
		.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		
		})
		.mousedown(function() {
	    playHadouken();
	    $('.ryu-ready').hide();
	    $('.ryu-throwing').show();
	    $('.hadouken').finish().show().animate(
  		{'left': '1020px'},
		  500,
		  function() {
		    $(this).hide();
		    $(this).css('left', '520px');
		  }
		)
	    }).mouseup(function() {
		$('.ryu-ready').show();
	    $('.ryu-throwing').hide();
		});

	$(document).keydown(function( e ){
		if (e.which == 88){
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').show();
		console.log('this is a test keydown');
		}
		}).keyup(function( e ){
		if (e.which == 88){
		$('.ryu-cool').hide();
		$('.ryu-still').show();
		console.log('this is a test keyup');
		}
	});	

	}
	);



function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
};