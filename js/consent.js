//Revise to reflect language of consent agreement. 
//Must hide consent the agreement until consent button is pressed.  
//Help me game button could go near Package input.
//Add this consent.js file to bottom of all pages for upload.


function insert ( ) {

//replace Name1
var name1Input  = document.getElementById("name1").value;
var name1Output  = document.getElementById("name1Out");
name1Output.innerHTML = name1Input;

//replace Date 1
var date1Input  = document.getElementById("date1").value;
var date1Output = document.getElementById("date1Out");
date1Output.innerHTML = date1Input;

//replace Address 1
var address1Input  = document.getElementById("address1").value;
var address1Output = document.getElementById("address1Out");
address1Output.innerHTML = address1Input;

//replace Phone 1
var phone1Input  = document.getElementById("phone1").value;
var phone1Output = document.getElementById("phone1Out");
phone1Output.innerHTML = phone1Input;

//replace E-mail 1
var email1Input  = document.getElementById("email1").value;
var email1Output = document.getElementById("email1Out");
email1Output.innerHTML = email1Input;

//replace Destination 1
var destination1Input = document.getElementById("destination1").value;
var destination1Output = document.getElementById("destination1Out");
destination1Output.innerHTML = destination1Input;
}

//Random Destination Selection
function Random() {
var destination = ["Rio de Janeiro!", "Pigeon Point!", "New Orleans!"];
var where = destination[Math.round(Math.random()*(destination.length-1))];
document.getElementById('package').innerHTML = '<div> ' + where +'</div>';
	
}
