
//Varaiables

var group_a = 12;
var group_b = 14;
var group_mega = group_a + group_b;
alert(group_mega + " study in our group.")

/////////////////////////////////////////////////////////////////////////////

//Strings
var name = 'Alisher\nMusurmonov.';
var who = "My name is\t";
var status = "\tI am 25 years old and single.";
var info = "Hello\t" + who + name + status;

alert(info)

//.....Strings and virables

var car = "Lambargine Aventador"
var adjective = "Super-Sport"
var hp = 1440
var speed = 258
var what = (car + " is " + adjective + " car with "+ hp +" horse powers." + "\t It goes " + speed + "mph.");
console.log(what);

/////////////////////////////////////////////////////////////////////////////

//....Arrays

var myDream = ["Koenigsegg Agera R", "Visit Mars", "Billioner"];
myDream[0] = 1200000
myDream[1] = 6000000000
myDream[2] = 1000000000
var price = (myDream[0] + myDream[1] + myDream[2]);
console.log(price);
alert("OMG! My dream costs me for " + price)

var items = ["cellphone", "Laptop", "TV-set", "Microwave"];
var items.push("Modem");
var items.splice(1);
alert(items)

///////////////////////////////////////////////////////////////////////////

//Function 

function formula(a,b) {
alert(a+b);
}

formula("Hello "," happy world")

// This is a function for paying employee wage 
function pay(hours,rate, overtime){
		var c = " dollars you owe me for this week."
        alert( (hours * rate) + ((1.5 * rate) * overtime)  + c );
     
}
pay(40,15,11)

////// Curransy converter
function currancy_euro(dollar){
	
	alert(dollar / 1.3 + " Euro")

	}

function currancy_dollar(euro){

	alert(euro * 1.3 + " Dollars") 
}


currancy_euro(20)
currancy_dollar(20)

/*I couldn't display arguments For example I want this: 20 euro is 16 dollars,
instead of just 16 dollar pop up with Alert command.*/ 




/////////////////////////////////////////////////////////////////////////


//Objects

var laptop={ brand: "Dell",
			 name: "Dell XPS 15",
			 edition: "professional",
			 display: "15'6 Infinity Display",
			 price: "$2199"

}

alert(laptop.display)

//#2
var names = { first: "Alisher", second: "Musurmonov", born: "30/12/1989" };
//We can achieve to the result in 2 ways
console.log(names.second); //1st way using console
alert(names.second)//2nd way by alert/popup command


//////////////////////////////////////////////////////////////////////////


//If statement

var price=2199;

if (price<=2199) {
	document.write("This laptop is too expensive");
}
else if (price!==2199) {
	doceument.write("Is it worth to buy it?");


}
else {
	alert("it is good price! Buy it right away");
}


//#2 
var edition="pro"

if (edition=="home") {
	document.write("Oh no I wish I could get different one");
}
else {
	alert("It is great. I always wanted that one :) ");
}

///////////////////////////////////////////////////////////////////////////

//Looping

var x = 1

while (x<5) {
	document.write(x + "I love coding <br/>");
	x++;
}


