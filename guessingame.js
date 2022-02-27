///Guessing game
var number = Math.round( Math.random() * 100 + 1 )
var guess = ""
while (guess !=number){

guess = prompt("Guess a number between 1 & 100")
if ( guess < number ) {
  alert("Too Low.");
  }

if ( guess > number ){
    alert("Too High.");
  }
}

alert("YOU WIN!!!!!!!!")
var  myname = prompt("What is ya name")
for ( var n = 1 ; n <= 100 ; n++ ) {
    document.write( n + " " + myname + "wins"  );
}
///more easy Guessing game
var number = Math.round( Math.random() * 10 )
var guess = ""
while (guess !=number){

guess = prompt("Guess a number between 1 & 10")
if ( guess < number ) {
  alert("Too Low.");
  }

if ( guess > number ){
    alert("Too High.");
  }
}

alert("YOU WIN!!!!!!!!")
var  myname = prompt("What is ya name")
for ( var n = 1 ; n <= 100 ; n++ ) {
    document.write( n + " " + myname + wins  );
}
