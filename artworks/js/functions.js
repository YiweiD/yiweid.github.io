$(document).ready(function(){
	$('#type1').click(
		function(){
		$('.type1').show();
		$('.type2').hide();
		$('.type3').hide();
		$('button').css('color','grey');
		$('#type1').css('color','white');
		
		});
	$('#type2').click(
		function(){
		$('.type2').show();
		$('.type1').hide();
		$('.type3').hide();
		$('button').css('color','grey');
		$('#type2').css('color','white');
		});
	$('#type3').click(
		function(){
		$('.type3').show();
		$('.type1').hide();
		$('.type2').hide();
		$('button').css('color','grey');
		$('#type3').css('color','white');
		});
	$('#type4').click(
		function(){
		$('.type1').show();
		$('.type2').show();
		$('.type3').show();
		$('button').css('color','grey');
		$('#type4').css('color','white');
		});

		
	})