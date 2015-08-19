$(document).ready(function() {

	$('.button').click(function(){
		event.preventDefault()
		var newNumber = $('.inputBox').val()
		// changes string into integer
		var num = +newNumber
		$('.inputBox').val('');
		$('.fizzbuzz').empty();
	if ( num !== NaN && num >= 1 && num <= 100 && num % 1 == 0) {
			// prevent number with decimal, number between 1 and 100, 
		for(var i=1; i<=num; i++) {
  			if(i%15===0) {
     		 	console.log("fizzbuzz")
  			$('.fizzbuzz').append('<li>FizzBuzz</li>')}
  			else if(i%3==0) {
      			console.log("fizz")
  			$('.fizzbuzz').append('<li>Fizz</li>')}
  			else if(i%5==0) {
    			 console.log("buzz")
 			$('.fizzbuzz').append('<li>Buzz</li>')}
 			else {
 				console.log(i)
 			$('.fizzbuzz').append('<li>' + i + '</li>')}
		}

 	}
 	} ) 
 	}) 
  
  
