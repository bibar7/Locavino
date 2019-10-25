$(document).ready(function($) {

	$('#video-banner').on('play', function(e) { 
  $('#play-icon').removeClass('icon-on').addClass('icon-off');
$('#pause-icon').removeClass('icon-off').addClass('icon-on');
});

$('#video-banner').on('pause', function(e) { 
$('#pause-icon').removeClass('icon-on').addClass('icon-off');
$('#play-icon').removeClass('icon-off').addClass('icon-on');
});

$('#video-banner').parent().click(function (e) {
	if($(this).children('#video-banner').get(0).paused){        
		$(this).children('#video-banner').get(0).play();   
    $(this).children('#locavino-video-overlay').fadeOut();

    		}
	else{       
		$(this).children('#video-banner').get(0).pause();
    $(this).children('#locavino-video-overlay').fadeIn();

    }
});

$('#video-banner').parent().mousemove(function (e) {
    $('#locavino-video-overlay').show();
});

$('#video-banner').parent().mouseout(function (e) {
  if(!$(this).children('#video-banner').get(0).paused){
    $('#locavino-video-overlay').hide();
  }
  else{
  $('#locavino-video-overlay').show();
  }
});


});

	